import { useState } from 'react';
import UploadArea, { type UploadState } from '../../components/UploadArea';
import './FileComparison.css';
import type { ColumnFormData } from '../../types';
import processSheet from '../../utils/processData';
import { directDownloadWorkbook } from '../../services/excel';

export default function FileComparison() {
  const [upload1, setUpload1] = useState<UploadState>({
    file: null,
    isUploading: false,
    error: null,
    success: false,
    showColumnForm: false
  });


  const handleFileSelect1 = (file: File,) => {
    if (file.type.includes('excel') || file.name.endsWith('.xlsx') || file.name.endsWith('.xls')) {
      setUpload1(prev => ({ ...prev, file, error: null, success: false, showColumnForm: false }));
    } else {
      setUpload1(prev => ({ ...prev, error: 'Please select a valid Excel file (.xlsx or .xls)' }));
    }
  };

  const handleUpload1 = async () => {
    if (!upload1.file) return;
    setUpload1(prev => ({ ...prev, isUploading: true, error: null }));
    try {
      // Simulate file upload
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Uploading file 1:', upload1.file.name);
      setUpload1(prev => ({
        ...prev,
        isUploading: false,
        success: true,
        showColumnForm: true
      }));
    } catch (error) {
      setUpload1(prev => ({ ...prev, isUploading: false, error: 'Upload failed. Please try again.' }));
    }
  };

  const handleClear1 = () => {
    setUpload1({
      file: null,
      isUploading: false,
      error: null,
      success: false,
      showColumnForm: false
    });
  };

  const handleColumnSubmit1 = (data: ColumnFormData) => {
    setUpload1(prev => ({ ...prev, showColumnForm: false }));
    const { newSheet1Data, newSheet2Data } = processSheet(data);
    directDownloadWorkbook({ newSheet1Data, newSheet2Data });
    console.log('Column config for file 1:', data);

    // Reset to rest mode after processing
    setTimeout(() => {
      handleClear1();
    }, 1000);
  };

  return (
    <div className="file-comparison-container">
      <div className="file-comparison-header">
        <h1>File Comparison Tool</h1>
        <p>Upload your Excel file to process and compare data.</p>
      </div>
      <div className="file-comparison-content">
        <UploadArea
          title="First Excel File"
          description="Upload your first Excel file for processing"
          accept=".xlsx,.xls,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"
          onFileSelect={handleFileSelect1}
          uploadState={upload1}
          onUpload={handleUpload1}
          onColumnSubmit={handleColumnSubmit1}
          onClear={handleClear1}
        ></UploadArea>
      </div>
    </div>
  );
}
