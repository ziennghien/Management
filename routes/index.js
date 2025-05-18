const express = require('express');
const router = express.Router();

const branchNames = {
  BVD: 'Bến Vân Đồn',
  GV: 'Gò Vấp',
  XVNT: 'Xô Viết Nghệ Tĩnh',
  LPM: 'Lý Phục Man',
  TANKIENG: 'Tân Kiểng'
};

// Trang menu chính
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Trang quản lý chi nhánh' });
});

// Route động theo tên chi nhánh ngay tại gốc URL
router.get('/:branch', function (req, res, next) {
  const branch = req.params.branch.toUpperCase();

  if (!branchNames[branch]) {
    return res.status(404).render('error', { message: 'Chi nhánh không tồn tại', error: {} });
  }

  res.render('chi_nhanh_form', {
    title: branchNames[branch],
    branch: branch
  });
});

module.exports = router;
