import React from 'react';
import StatCard from '../../components/stat-card/index';

const RequestsSidebar = ({ isOpen, onClose, data, setData }) => {
  if (!isOpen) return null;

  const handleApprove = (id) => {
    const updatedRequests = data.requests.map(req => 
      req.id === id ? { ...req, status: 'approved' } : req
    );
    setData({ ...data, requests: updatedRequests });
  };


  const handleReject = (id, reason) => {
    const updatedRequests = data.requests.map(req => 
      req.id === id ? { ...req, status: 'rejected', rejectionReason: reason } : req
    );
    setData({ ...data, requests: updatedRequests });
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-start">
      {/* الخلفية المظلمة (Overlay) عند الضغط عليها يغلق السايدبار */}
      <div className="absolute inset-0 bg-black opacity-40" onClick={onClose}></div>

      {/* جسم السايدبار (يفتح من اليسار كما في الصورة المعروضة) */}
      <div className="relative bg-white w-96 h-full shadow-xl flex flex-col p-6 overflow-y-auto z-10 animate-slide-left">
        
        {/* زر الإغلاق */}
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-right text-xl font-bold self-start">
          ✕
        </button>

        {/* رأس السايدبار */}
        <div className="text-right mt-4 mb-6">
          <h2 className="text-lg font-bold text-gray-900">مراجعة طلبات الساعات :</h2>
          <p className="text-sm text-gray-600 mt-2">المبادرة : <span className="font-semibold">{data.initiativeName}</span></p>
          <p className="text-xs text-gray-500 mt-1">إجمالي الطلبات المعلقة : {data.requests.filter(r => r.status === 'pending').length} طلبات</p>
        </div>

        <hr className="border-gray-200 mb-2" />

        {/* قائمة الطلبات الديناميكية */}
        <div className="flex flex-col gap-2">
          {data.requests.map((request) => (
            <StatCard 
              key={request.id} 
              request={request} 
              onApprove={handleApprove}
              onReject={handleReject}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default RequestsSidebar;
