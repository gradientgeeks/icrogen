import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { type SubjectType } from '../../types/models';
import { subjectService, type CreateSubjectTypeRequest, type UpdateSubjectTypeRequest } from '../../services/subjectService';

interface SubjectTypeFormDialogProps {
  open: boolean;
  subjectType: SubjectType | null;
  onClose: () => void;
  onSubmit: () => void;
}

const SubjectTypeFormDialog: React.FC<SubjectTypeFormDialogProps> = ({
  open,
  subjectType,
  onClose,
  onSubmit,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    is_lab: false,
    default_consecutive_preferred: true,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    if (subjectType) {
      setFormData({
        name: subjectType.name,
        is_lab: subjectType.is_lab,
        default_consecutive_preferred: subjectType.default_consecutive_preferred,
      });
    } else {
      setFormData({
        name: '',
        is_lab: false,
        default_consecutive_preferred: true,
      });
    }
    setErrors({});
    setSubmitError(null);
  }, [subjectType, open]);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Subject type name is required';
    } else if (formData.name.length > 100) {
      newErrors.name = 'Subject type name must be 100 characters or less';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmitting(true);
    setSubmitError(null);

    try {
      if (subjectType) {
        const updateData: UpdateSubjectTypeRequest = formData;
        await subjectService.updateSubjectType(subjectType.id, updateData);
      } else {
        const createData: CreateSubjectTypeRequest = formData;
        await subjectService.createSubjectType(createData);
      }
      onSubmit();
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Failed to save subject type');
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        {subjectType ? 'Edit Subject Type' : 'Add New Subject Type'}
      </DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          {submitError && (
            <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-md">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm">{submitError}</p>
                </div>
                <div className="ml-auto pl-3">
                  <button
                    type="button"
                    onClick={() => setSubmitError(null)}
                    className="inline-flex text-red-400 hover:text-red-500"
                  >
                    <span className="sr-only">Dismiss</span>
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )}

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Subject Type Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className={`mt-1 block w-full rounded-md shadow-sm sm:text-sm ${
                errors.name
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
              }`}
              placeholder="e.g., Theory, Lab, Practical"
              maxLength={100}
              required
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </div>

          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="is_lab"
                checked={formData.is_lab}
                onChange={(e) => handleChange('is_lab', e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="is_lab" className="ml-3 block text-sm font-medium text-gray-700">
                Is Lab Subject
              </label>
            </div>
            <p className="ml-7 text-xs text-gray-500">
              Check this if this subject type represents laboratory courses (requires 3 consecutive slots)
            </p>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="default_consecutive_preferred"
                checked={formData.default_consecutive_preferred}
                onChange={(e) => handleChange('default_consecutive_preferred', e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="default_consecutive_preferred" className="ml-3 block text-sm font-medium text-gray-700">
                Prefer Consecutive Slots
              </label>
            </div>
            <p className="ml-7 text-xs text-gray-500">
              When scheduling, prefer consecutive time slots for this subject type
            </p>
          </div>
        </form>
      </DialogContent>
      <DialogActions>
        <button
          type="button"
          onClick={onClose}
          disabled={submitting}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Cancel
        </button>
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={submitting}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? 'Saving...' : (subjectType ? 'Update' : 'Create')}
        </button>
      </DialogActions>
    </Dialog>
  );
};

export default SubjectTypeFormDialog;
