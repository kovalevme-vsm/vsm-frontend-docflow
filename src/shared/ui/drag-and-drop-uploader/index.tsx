import React, { ReactElement, useCallback, useState } from 'react';
import { TbCloudUpload } from 'react-icons/tb';

type DragAndDropUploaderProps = {
  onChange: (file: File) => void;
};

export function DragAndDropUploader({
  onChange,
}: DragAndDropUploaderProps): ReactElement {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const handleDragOver = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      setIsDragging(true);
    },
    []
  );
  const handleDragLeave = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      setIsDragging(false);
    },
    []
  );
  const handleDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(event.dataTransfer.files);
    droppedFiles.forEach((file: File) => {
      onChange(file);
    });
  }, []);

  const handleFileInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFiles = Array.from(event.target.files || []);
      selectedFiles.forEach((file: File) => {
        onChange(file);
      });
    },
    []
  );

  return (
    <div className={'upload-storage-button'}>
      <label htmlFor="file-upload">
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`group bg-muted flex cursor-pointer flex-col items-center rounded-xl border border-dashed p-8 py-12 text-center duration-300 hover:border-blue-500 ${
            isDragging
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-300 bg-gray-50'
          }`}
        >
          <TbCloudUpload
            className={
              'text-5xl text-gray-300 duration-300 group-hover:text-blue-500 dark:text-gray-700'
            }
          />
          <p className="font-light text-gray-400">
            Перетащите файлы сюда или{' '}
            <label
              htmlFor="file-upload"
              className="cursor-pointer font-medium text-blue-600"
            >
              выберите файл
            </label>
          </p>
          <input
            id="file-upload"
            type="file"
            multiple
            accept=".doc,.docx,.jpg,.png"
            onChange={handleFileInput}
            className="hidden"
          />
        </div>
      </label>
    </div>
  );
}
