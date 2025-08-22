
const express = require('express');
const { getReports, addReport, updateReport, deleteReport } = require('../controllers/reportController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', protect,getReports);
router.post('/', protect,addReport);
router.put('/:id', protect, updateReport);
router.delete('/:id', protect, deleteReport);

module.exports = router;
