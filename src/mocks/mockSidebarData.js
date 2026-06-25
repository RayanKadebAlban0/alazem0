export const mockSidebarData = {
  initiativeName: "حملة تشجير",
  totalPendingRequests: 3,
  requests: [
    {
      id: 1,
      userName: "محمد أحمد",
      userImage: "https://example.com",
      date: "25 كانون الثاني",
      submittedHours: 5,
          status: "approved"
      },
    {
      id: 2,
      userName: "سارة",
      userImage: "https://example.com",
      date: "25 كانون الثاني",
      submittedHours: 5,
      status: "pending" 
    },
    {
      id: 3,
      userName: "أمين",
      userImage: "https://example.com",
      date: "25 كانون الثاني",
      submittedHours: 5,
      status: "rejected", 
      rejectionReason: "" 
    }
  ]
};
