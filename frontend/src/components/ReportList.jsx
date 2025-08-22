import { useAuth } from '../context/AuthContext';
import axiosInstance from '../axiosConfig';

const ReportList = ({ reports, setReports, setEditingReport }) => {
  const { user } = useAuth();

  const handleDelete = async (reportId) => {
    try {
      await axiosInstance.delete(`/api/report/${reportId}`, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      setReports(reports.filter((report) => report._id !== reportId));
    } catch (error) {
      alert('Failed to delete report.');
    }
  };

  return (
    <div>
      {reports.map((report) => (
        <div key={report._id} className="bg-gray-100 p-4 mb-4 rounded shadow">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-bold">{report.title}</h2>
            <p className="text-sm text-gray-500">Report Id:{report._id}</p>  
          </div>
          <p className="text-sm text-gray-500">Submit Time: {report.submittime? new Date(report.submittime).toISOString().slice(0, 19).replace('T', ' '): 'N/A'}</p>
          <p className="break-words">Description:{report.description.length > 100? report.description.substring(0, 100) + "...": report.description}</p>
          <p className="text-sm text-gray-500">Date: {new Date(report.date).toLocaleDateString()}</p>
          <div className="mt-2">
            <button
              onClick={() => setEditingReport(report)}
              className="mr-2 bg-green-500 text-white px-4 py-2 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(report._id)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReportList;
