import { useState, useEffect } from 'react';
import axiosInstance from '../axiosConfig';
import ReportForm from '../components/ReportForm';
import ReportList from '../components/ReportList';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Reports = () => {
  const { user } = useAuth();
  const [reports, setReports] = useState([]);
  const [editingReport, setEditingReport] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    if(!user){
      navigate('/login');
    }
    else{
      const fetchReports = async () => {
        try {
          const response = await axiosInstance.get('/api/report', {
            headers: { Authorization: `Bearer ${user.token}` },
          });
          setReports(response.data);
          if (response.status===200){
            setReports(response.data||[]);
          }
          else if (response.status === 204|| (Array.isArray(response.data)&& response.data.length === 0))
          {
            setReports([]);
          }
          else{
            alert('Unexpected response while fetching reports.')
          }
        } catch (error) {
          console.error(error);
          alert('Failed to fetch reports.');
        }
      };

      fetchReports();
    }
    
  }, [user,navigate]);

  return (
    <div className="container mx-auto p-6">
      <ReportForm
        reports={reports}
        setReports={setReports}
        editingReport={editingReport}
        setEditingReport={setEditingReport}
      />
      <ReportList reports={reports} setReports={setReports} setEditingReport={setEditingReport} />
    </div>
  );
};

export default Reports;