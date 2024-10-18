import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';


export const DataProject = () => {
  
 <Routes>
  <Route path="*" element={<Navigate to="project-list" replace />} />
 </Routes>
 
}


export default DataProject;
