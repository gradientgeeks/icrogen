import React, { useState, useEffect } from 'react';
import { subjectService } from '../../services/subjectService';
import { type SubjectType } from '../../types/models';
import SubjectTypeFormDialog from './SubjectTypeFormDialog';
import LoadingSpinner from '../../components/Common/LoadingSpinner';
import ErrorAlert from '../../components/Common/ErrorAlert';
import ConfirmDialog from '../../components/Common/ConfirmDialog';
import { Add as Plus, Edit as Edit2, Delete as Trash2, Book as BookOpen, Science as Flask } from '@mui/icons-material';

const SubjectTypeList: React.FC = () => {
  const [subjectTypes, setSubjectTypes] = useState<SubjectType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [openForm, setOpenForm] = useState(false);
  const [selectedType, setSelectedType] = useState<SubjectType | null>(null);
  const [deleteDialog, setDeleteDialog] = useState<{
    open: boolean;
    type: SubjectType | null;
  }>({ open: false, type: null });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await subjectService.getSubjectTypes();
      setSubjectTypes(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch subject types');
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = () => {
    setSelectedType(null);
    setOpenForm(true);
  };

  const handleEdit = (type: SubjectType) => {
    setSelectedType(type);
    setOpenForm(true);
  };

  const handleDelete = async () => {
    if (!deleteDialog.type) return;

    try {
      await subjectService.deleteSubjectType(deleteDialog.type.id);
      await fetchData();
      setDeleteDialog({ open: false, type: null });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete subject type');
      setDeleteDialog({ open: false, type: null });
    }
  };

  const handleFormClose = () => {
    setOpenForm(false);
    setSelectedType(null);
  };

  const handleFormSubmit = async () => {
    await fetchData();
    handleFormClose();
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Subject Types</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage subject types such as Theory, Lab, and other course categories
          </p>
        </div>
        <button
          onClick={handleAdd}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Subject Type
        </button>
      </div>

      {/* Error Alert */}
      {error && <ErrorAlert message={error} onClose={() => setError(null)} />}

      {/* Subject Types Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {subjectTypes.map((type) => (
          <div
            key={type.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${type.is_lab ? 'bg-purple-100' : 'bg-blue-100'}`}>
                  {type.is_lab ? (
                    <Flask className={`w-6 h-6 ${type.is_lab ? 'text-purple-600' : 'text-blue-600'}`} />
                  ) : (
                    <BookOpen className={`w-6 h-6 ${type.is_lab ? 'text-purple-600' : 'text-blue-600'}`} />
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleEdit(type)}
                    className="p-2 text-gray-400 hover:text-blue-600 rounded-lg hover:bg-gray-100 transition-colors"
                    title="Edit"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setDeleteDialog({ open: true, type })}
                    className="p-2 text-gray-400 hover:text-red-600 rounded-lg hover:bg-gray-100 transition-colors"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{type.name}</h3>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Type:</span>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    type.is_lab ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {type.is_lab ? 'Lab' : 'Theory'}
                  </span>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Consecutive Preferred:</span>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    type.default_consecutive_preferred ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {type.default_consecutive_preferred ? 'Yes' : 'No'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {subjectTypes.length === 0 && !loading && (
        <div className="text-center py-12">
          <BookOpen className="w-12 h-12 mx-auto text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No subject types</h3>
          <p className="mt-1 text-sm text-gray-500">Get started by creating a new subject type.</p>
          <div className="mt-6">
            <button
              onClick={handleAdd}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              <Plus className="w-5 h-5 mr-2" />
              Add Subject Type
            </button>
          </div>
        </div>
      )}

      {/* Form Dialog */}
      <SubjectTypeFormDialog
        open={openForm}
        subjectType={selectedType}
        onClose={handleFormClose}
        onSubmit={handleFormSubmit}
      />

      {/* Delete Confirmation Dialog */}
      <ConfirmDialog
        open={deleteDialog.open}
        title="Delete Subject Type"
        message={`Are you sure you want to delete "${deleteDialog.type?.name}"? This action cannot be undone.`}
        onConfirm={handleDelete}
        onCancel={() => setDeleteDialog({ open: false, type: null })}
        confirmText="Delete"
        cancelText="Cancel"
      />
    </div>
  );
};

export default SubjectTypeList;
