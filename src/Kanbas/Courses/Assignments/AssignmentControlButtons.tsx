import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaTrash } from 'react-icons/fa';
import { IoEllipsisVertical } from 'react-icons/io5';
import GreenCheckmark from './GreenCheckmark';
import { deleteAssignment } from './reducer'; 

export default function AssignmentControlButtons({ assignmentID }: { assignmentID: string }) {
  const dispatch = useDispatch();
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const handleDeleteClick = () => {
    setShowDeleteDialog(true);
  };

  const handleConfirmDelete = () => {
    dispatch(deleteAssignment(assignmentID)); 
    setShowDeleteDialog(false);
  };

  const handleCancelDelete = () => {
    setShowDeleteDialog(false);
  };

  return (
    <>
      <div className="float-end">
        <FaTrash className="text-danger me-2 mb-1" onClick={handleDeleteClick} />
        <GreenCheckmark />
        <IoEllipsisVertical className="fs-4" />
      </div>

      {showDeleteDialog && (
        <div
          className="modal fade show d-block"
          role="dialog"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Delete Assignment</h5>
                <button type="button" className="btn-close" onClick={handleCancelDelete}></button>
              </div>
              <div className="modal-body">
                Are you sure you want to delete this assignment?
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCancelDelete}>
                  Cancel
                </button>
                <button type="button" className="btn btn-danger" onClick={handleConfirmDelete}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
