import { useState } from 'react';
import type { ColumnFormData, SheetData } from '../types';
import ColumnForm from './ColumnForm';
import FileDropZone from './FileDropZone';
import { convertToOurFormat } from '../services/excel';
import { motion, AnimatePresence } from 'framer-motion';

export type UploadState = {
  file: File | null;
  isUploading: boolean;
  error: string | null;
  success: boolean;
  showColumnForm: boolean;
};

interface UploadAreaProps {
  title: string;
  description: string;
  accept: string;
  onFileSelect: (file: File) => void;
  uploadState: UploadState;
  onUpload: () => void;
  onColumnSubmit: (data: ColumnFormData) => void;
  onClear: () => void;
}

export default function UploadArea({
  title,
  description,
  accept,
  onFileSelect,
  uploadState,
  onUpload,
  onColumnSubmit,
  onClear
}: UploadAreaProps) {
  const [sheetData, setSheetData] = useState<Record<string, SheetData>>({});

  const handleFileSelect = (file: File) => {
    onFileSelect(file);
    readExcelColumns(file);
  };

  const readExcelColumns = (file: File) => {
    const reader = new FileReader();
    reader.onload = (evt) => {
      const data = evt.target?.result;
      const extractedData = convertToOurFormat(data);
      setSheetData(extractedData);
    };
    reader.readAsBinaryString(file);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-surface rounded-2xl border border-border shadow-sm flex flex-col items-center justify-center min-h-[300px]">
      <div className="mb-6 text-center">
        <h3 className="text-xl font-semibold text-text-primary mb-2">{title}</h3>
        <p className="text-text-secondary">{description}</p>
      </div>

      <FileDropZone
        onFileSelect={handleFileSelect}
        file={uploadState.file}
        error={uploadState.error}
        success={uploadState.success}
        accept={accept}
        isUploading={uploadState.isUploading}
        onClear={onClear}
      />

      <AnimatePresence>
        {uploadState.file && !uploadState.success && !uploadState.isUploading && !uploadState.error && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="flex items-center justify-center w-full"
          >
            <button
              onClick={onUpload}
              className="mt-1 px-6 py-2.5 bg-primary hover:bg-primary-hover text-white rounded-lg font-medium transition-colors shadow-lg shadow-primary/25 flex items-center gap-2"
            >
              Upload and Process
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {uploadState.showColumnForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-8 pt-8 border-t border-border"
          >
            <ColumnForm
              onSubmit={onColumnSubmit}
              sheetNames={Object.keys(sheetData)}
              sheetData={sheetData}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}