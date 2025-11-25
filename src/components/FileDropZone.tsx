import React from 'react';
import { Upload, FileSpreadsheet, X, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './FileDropZone.css';

interface FileDropZoneProps {
  onFileSelect: (file: File) => void;
  file: File | null;
  error: string | null;
  success: boolean;
  accept: string;
  isUploading: boolean;
  onClear: () => void;
}

export default function FileDropZone({
  onFileSelect,
  file,
  error,
  success,
  accept,
  isUploading,
  onClear
}: FileDropZoneProps) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      onFileSelect(selectedFile);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && (droppedFile.type.includes('excel') || droppedFile.name.endsWith('.xlsx') || droppedFile.name.endsWith('.xls'))) {
      onFileSelect(droppedFile);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const getZoneClass = () => {
    const classes = ['file-drop-zone'];
    if (error) classes.push('error');
    else if (success) classes.push('success');
    else if (file) classes.push('has-file');
    return classes.join(' ');
  };

  return (
    <div className="relative group">
      <motion.div
        layout
        className={getZoneClass()}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={() => !file && document.getElementById('file-upload')?.click()}
      >
        <input
          type="file"
          id="file-upload"
          className="hidden"
          accept={accept}
          onChange={handleFileChange}
          disabled={!!file || isUploading}
          style={{ display: 'none' }}
        />

        <AnimatePresence mode="wait">
          {isUploading ? (
            <motion.div
              key="uploading"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="drop-content"
            >
              <Loader2 className="w-10 h-10 text-primary animate-spin" size={40} />
              <p className="drop-text-secondary">Uploading...</p>
            </motion.div>
          ) : success ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="drop-content"
            >
              <CheckCircle className="text-success" size={40} />
              <div className="file-info-card">
                <p className="drop-text-primary">{file?.name}</p>
                <p className="drop-text-secondary text-success">Upload Complete</p>
              </div>
            </motion.div>
          ) : error ? (
            <motion.div
              key="error"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="drop-content"
            >
              <AlertCircle className="text-error" size={40} />
              <div className="file-info-card">
                <p className="drop-text-primary text-error">Upload Failed</p>
                <p className="drop-text-secondary">{error}</p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onClear();
                }}
                className="retry-btn"
              >
                Try Again
              </button>
            </motion.div>
          ) : file ? (
            <motion.div
              key="file"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="drop-content"
            >
              <FileSpreadsheet className="text-primary" size={40} />
              <div className="file-info-card">
                <p className="drop-text-primary">{file.name}</p>
                <p className="drop-text-secondary">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onClear();
                }}
                className="remove-file-btn"
                title="Remove file"
              >
                <X size={20} />
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="drop-content"
            >
              <div className="drop-icon-wrapper">
                <Upload className="text-primary" size={24} />
              </div>
              <div className="file-info-card">
                <p className="drop-text-primary">
                  Click to upload or drag and drop
                </p>
                <p className="drop-text-secondary">
                  Excel files only (.xlsx, .xls)
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
