import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import axiosInstance from '../axiosConfig';

const ReportForm = ({ reports, setReports, editingReport, setEditingReport }) => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({ title: '',address:'', description: '', date: '' });
  const formatDate = (dateString) => {return new Date(dateString).toISOString().split('T')[0];};
 
  useEffect(() => {
    if (editingReport) {
      setFormData({
        title: editingReport.title,
        address:editingReport.address,
        description: editingReport.description,
        date: editingReport.date,
      });
    } else {
      setFormData({ title: '',address:'', description: '', date: '' });
    }
  }, [editingReport]);

  console.log('Submitting token:', user?.token);
  console.log('Submitting formData:', formData);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingReport) {
        const response = await axiosInstance.put(`/api/report/${editingReport._id}`, formData, {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        setReports(reports.map((report) => (report._id === response.data._id ? response.data : report)));
      } else {
        const response = await axiosInstance.post('/api/report', formData, {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        setReports([...reports, response.data]);
      }
      setEditingReport(null);
      setFormData({ title: '',address:'', description: '', date: '' });
    } catch (error) {
      alert('Failed to save report.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded mb-6">
      <h1 className="text-2xl font-bold mb-4">{editingReport ?  `Report ${editingReport?._id}`  : 'New Report'}</h1>
      <div className="flex gap-4 mb-4 ">
        <input
        type="text"
        placeholder="Title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        className="flex-1 mb-4 p-2 border rounded"
        />
        <input
          type="date"
          value={formData.date?formatDate(formData.date):""}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          className="flex-1 mb-4 p-2 border rounded"
        />
      </div>
      <input
        type="text"
        placeholder="Address"
        value={formData.address}
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        className="w-full mb-4 p-2 border rounded"
      />
      <textarea
        type="text"
        placeholder="Description"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        className="w-full mb-4 p-2 border rounded"
      />
     
      <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
        {editingReport ? 'Update Report' : 'Submit Report '}
      </button>
    </form>
  );
};

export default ReportForm;
