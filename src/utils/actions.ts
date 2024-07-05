export const getInvestments = () => {
  const investment = {
    Id: "e0f45b3a-6f8e-4142-8c36-9d7a8c7a9456",
    Amount: 500,
    Percent: 5.0,
    IsOwner: true,
    CreatedAt: "2024-07-04T10:00:00Z",
    BusinessResponse: {
      Id: "ae0e4b7b-6f8e-4142-8c36-9d7a8c7a9456",
      Name: "Doe Enterprises",
      Header: "Innovative Solutions",
      Description: "We provide innovative tech solutions.",
      Path: "/images/business.jpg",
      TargetAmount: 50000,
      CurrentAmount: 10000,
      Deadline: "2024-12-31T23:59:59Z",
      Charity: false,
      Percent: 5.0,
      State: "Show",
      CreatedAt: "2024-07-04T10:00:00Z",
      IsOwner: true,
      Investments: [],
      Charities: [],
    },
    UserResponse: {
      Id: "d2f0851e-8c2e-4c3b-9c9d-0dbe567b8d1a",
      Username: "johndoe",
      Email: "johndoe@example.com",
      Phone: "123-456-7890",
      Path: "/images/johndoe.jpg",
      IsOwner: true,
      Businesses: [
        {
          Id: "ae0e4b7b-6f8e-4142-8c36-9d7a8c7a9456",
          Name: "Doe Enterprises",
          Header: "Innovative Solutions",
          Description: "We provide innovative tech solutions.",
          Path: "/images/business.jpg",
          TargetAmount: 50000,
          CurrentAmount: 10000,
          Deadline: "2024-12-31T23:59:59Z",
          Charity: false,
          Percent: 5.0,
          State: "Show",
          CreatedAt: "2024-07-04T10:00:00Z",
          IsOwner: true,
          Investments: [],
          Charities: [],
        },
      ],
      Investments: [],
      Charities: [],
    },
  };
  const investments = Array.from({ length: 10 }, () => investment);
  return investments;
};

export const getInvestment = () => {
  const investment = {
    Id: "e0f45b3a-6f8e-4142-8c36-9d7a8c7a9456",
    Amount: 500,
    Percent: 5.0,
    IsOwner: true,
    CreatedAt: "2024-07-04T10:00:00Z",
    BusinessResponse: {
      Id: "ae0e4b7b-6f8e-4142-8c36-9d7a8c7a9456",
      Name: "Doe Enterprises",
      Header: "Innovative Solutions",
      Description: "We provide innovative tech solutions.",
      Path: "/images/business.jpg",
      TargetAmount: 50000,
      CurrentAmount: 10000,
      Deadline: "2024-12-31T23:59:59Z",
      Charity: false,
      Percent: 5.0,
      State: "Show",
      CreatedAt: "2024-07-04T10:00:00Z",
      IsOwner: true,
      Investments: [],
      Charities: [],
    },
    UserResponse: {
      Id: "d2f0851e-8c2e-4c3b-9c9d-0dbe567b8d1a",
      Username: "johndoe",
      Email: "johndoe@example.com",
      Phone: "123-456-7890",
      Path: "/images/johndoe.jpg",
      IsOwner: true,
      Businesses: [
        {
          Id: "ae0e4b7b-6f8e-4142-8c36-9d7a8c7a9456",
          Name: "Doe Enterprises",
          Header: "Innovative Solutions",
          Description: "We provide innovative tech solutions.",
          Path: "/images/business.jpg",
          TargetAmount: 50000,
          CurrentAmount: 10000,
          Deadline: "2024-12-31T23:59:59Z",
          Charity: false,
          Percent: 5.0,
          State: "Show",
          CreatedAt: "2024-07-04T10:00:00Z",
          IsOwner: true,
          Investments: [],
          Charities: [],
        },
      ],
      Investments: [],
      Charities: [],
    },
  };
  return investment;
};

export const getBusinesses = () => {
  const business = {
    Id: "ae0e4b7b-6f8e-4142-8c36-9d7a8c7a9456",
    Name: "Doe Enterprises",
    Header: "Innovative Solutions",
    Description: "We provide innovative tech solutions.",
    Path: "/small-business.jpg",
    TargetAmount: 50000,
    CurrentAmount: 10000,
    Deadline: "2024-12-31T23:59:59Z",
    Charity: false,
    Percent: 5.0,
    State: "Show",
    CreatedAt: "2024-07-04T10:00:00Z",
    IsOwner: true,
    Investments: [],
    Charities: [],
  };
  const businesses = Array.from({ length: 20 }, (_, i) => ({
    ...business,
    id: business.Id + i,
  }));
  return businesses;
};

export const getBusiness = () => {
  const business = {
    Id: "ae0e4b7b-6f8e-4142-8c36-9d7a8c7a9456",
    Name: "Doe Enterprises",
    Header: "Innovative Solutions",
    Description: "We provide innovative tech solutions.",
    Path: "/small-business.jpg",
    TargetAmount: 50000,
    CurrentAmount: 10000,
    Deadline: "2024-12-31T23:59:59Z",
    Charity: false,
    Percent: 5.0,
    State: "Show",
    CreatedAt: "2024-07-04T10:00:00Z",
    IsOwner: true,
    Investments: [],
    Charities: [],
  };
  return business;
};

export const getUser = () => {
  const user = {
    Id: "d2f0851e-8c2e-4c3b-9c9d-0dbe567b8d1a",
    Username: "johndoe",
    Email: "johndoe@example.com",
    Phone: "1234567890",
    Path: "/user.jpg",
    IsOwner: true,
    Businesses: [
      {
        Id: "ae0e4b7b-6f8e-4142-8c36-9d7a8c7a9456",
        Name: "Doe Enterprises",
        Header: "Innovative Solutions",
        Description: "We provide innovative tech solutions.",
        Path: "/small-business.jpg",
        TargetAmount: 50000,
        CurrentAmount: 10000,
        Deadline: "2024-12-31T23:59:59Z",
        Charity: false,
        Percent: 5.0,
        State: "Show",
        CreatedAt: "2024-07-04T10:00:00Z",
        IsOwner: true,
        Investments: [],
        Charities: [],
      },
    ],
    Investments: [],
    Charities: [],
  };
  return user;
};
