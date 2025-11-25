export interface SheetRow {
  [key: string]: string | number | boolean | null | undefined;
}

export interface SheetData {
  name: string;
  data: SheetRow[];
  headers: string[];
}

export interface ColumnFormData {
  uniqueColumn: string;
  comparisonColumn: string;
  uniqueColumnSheet2: string;
  comparisonColumnSheet2: string;
  sheetData?: Record<string, SheetData>;
  sheet1Name: string;
  sheet2Name: string;
}

export interface ProcessedResult {
  newSheet1Data: SheetRow[];
  newSheet2Data: SheetRow[];
}
