import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

import iconContainer from '../images/iconContainer (1).png';
const RecentOrders = () => {
    const [showNewProductComponent, setShowNewProductComponent] = useState(false);

    const handleNewProductClick = () => {
        setShowNewProductComponent(true); // غيّر الحالة عند الضغط على الزر
    };

    if (showNewProductComponent) {
        // كومبوننت جديد يتم عرضه بعد الضغط على الزر
        return ( 
            <>
             <div className="card p-5 h-100 my-3">
            <h3 style={{ fontSize: "16px" }} className="mb-5">Recent Ads</h3>
      
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div 
                className="basic-row d-flex justify-content-between align-items-center p-3" 
                style={{
                  borderBottom: "1px solid #ddd",
                  borderRadius: "8px",
                  width: "100%",
                  maxWidth: "500px"
                }}
              >
                {/* صورة رمزية أو أيقونة */}
                <div 
                  className="rounded" 
                  style={{
                    backgroundColor: "#f9f1f1",
                    width: "40px",
                    height: "40px"
                  }}
                ></div>
      
                {/* محتوى الطلب */}
                <div className="d-flex flex-column flex-grow-1 mx-3">
                  <strong>Bakr</strong>
                  <span>LE520 × 4</span>
                </div>
      
                {/* التاريخ والحالة */}
                <div className="d-flex flex-column flex-grow-1 mx-3 align-items-center">
                  <p 
                    className="text-muted" 
                    style={{ fontSize: "14px", margin: "0" }}
                  >
                    12 Sept 2022
                  </p>
                  <span 
                    className="badge" 
                    style={{
                      padding: "8px 10px",
                      borderRadius: "10px",
                      background: "#7B80891A",
                      color: "#7B8089",
                      marginTop: "5px"
                    }}
                  >
                    Pending
                  </span>
                </div>
              </div>
            </div>

            <div className="d-flex flex-column justify-content-center align-items-center">
              <div 
                className="basic-row d-flex justify-content-between align-items-center p-3" 
                style={{
                  borderBottom: "1px solid #ddd",
                  borderRadius: "8px",
                  width: "100%",
                  maxWidth: "500px"
                }}
              >
                {/* صورة رمزية أو أيقونة */}
                <div 
                  className="rounded" 
                  style={{
                    backgroundColor: "#f9f1f1",
                    width: "40px",
                    height: "40px"
                  }}
                ></div>
      
                {/* محتوى الطلب */}
                <div className="d-flex flex-column flex-grow-1 mx-3">
                  <strong>Bakr</strong>
                  <span>LE520 × 4</span>
                </div>
      
                {/* التاريخ والحالة */}
                <div className="d-flex flex-column flex-grow-1 mx-3 align-items-center">
                  <p 
                    className="text-muted" 
                    style={{ fontSize: "14px", margin: "0" }}
                  >
                    12 Sept 2022
                  </p>
                  <span 
                    className="badge" 
                    style={{
                      padding: "8px 10px",
                      borderRadius: "10px",
                      background: "#7B80891A",
                      color: "#7B8089",
                      marginTop: "5px"
                    }}
                  >
                    Pending
                  </span>
                </div>
              </div>
            </div>

            <div className="d-flex flex-column justify-content-center align-items-center">
              <div 
                className="basic-row d-flex justify-content-between align-items-center p-3" 
                style={{
                  borderBottom: "1px solid #ddd",
                  borderRadius: "8px",
                  width: "100%",
                  maxWidth: "500px"
                }}
              >
                {/* صورة رمزية أو أيقونة */}
                <div 
                  className="rounded" 
                  style={{
                    backgroundColor: "#f9f1f1",
                    width: "40px",
                    height: "40px"
                  }}
                ></div>
      
                {/* محتوى الطلب */}
                <div className="d-flex flex-column flex-grow-1 mx-3">
                  <strong>Bakr</strong>
                  <span>LE520 × 4</span>
                </div>
      
                {/* التاريخ والحالة */}
                <div className="d-flex flex-column flex-grow-1 mx-3 align-items-center">
                  <p 
                    className="text-muted" 
                    style={{ fontSize: "14px", margin: "0" }}
                  >
                    12 Sept 2022
                  </p>
                  <span 
                    className="badge" 
                    style={{
                      padding: "8px 10px",
                      borderRadius: "10px",
                      background: "#7B80891A",
                      color: "#7B8089",
                      marginTop: "5px"
                    }}
                  >
                    Pending
                  </span>
                </div>
              </div>
            </div>

            <div className="d-flex flex-column justify-content-center align-items-center">
              <div 
                className="basic-row d-flex justify-content-between align-items-center p-3" 
                style={{
                  borderBottom: "1px solid #ddd",
                  borderRadius: "8px",
                  width: "100%",
                  maxWidth: "500px"
                }}
              >
                {/* صورة رمزية أو أيقونة */}
                <div 
                  className="rounded" 
                  style={{
                    backgroundColor: "#f9f1f1",
                    width: "40px",
                    height: "40px"
                  }}
                ></div>
      
                {/* محتوى الطلب */}
                <div className="d-flex flex-column flex-grow-1 mx-3">
                  <strong>Bakr</strong>
                  <span>LE520 × 4</span>
                </div>
      
                {/* التاريخ والحالة */}
                <div className="d-flex flex-column flex-grow-1 mx-3 align-items-center">
                  <p 
                    className="text-muted" 
                    style={{ fontSize: "14px", margin: "0" }}
                  >
                    12 Sept 2022
                  </p>
                  <span 
                    className="badge" 
                    style={{
                      padding: "8px 10px",
                      borderRadius: "10px",
                      background: "#7B80891A",
                      color: "#7B8089",
                      marginTop: "5px"
                    }}
                  >
                    Pending
                  </span>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div 
                className="basic-row d-flex justify-content-between align-items-center p-3" 
                style={{
                  borderBottom: "1px solid #ddd",
                  borderRadius: "8px",
                  width: "100%",
                  maxWidth: "500px"
                }}
              >
                {/* صورة رمزية أو أيقونة */}
                <div 
                  className="rounded" 
                  style={{
                    backgroundColor: "#f9f1f1",
                    width: "40px",
                    height: "40px"
                  }}
                ></div>
      
                {/* محتوى الطلب */}
                <div className="d-flex flex-column flex-grow-1 mx-3">
                  <strong>Bakr</strong>
                  <span>LE520 × 4</span>
                </div>
      
                {/* التاريخ والحالة */}
                <div className="d-flex flex-column flex-grow-1 mx-3 align-items-center">
                  <p 
                    className="text-muted" 
                    style={{ fontSize: "14px", margin: "0" }}
                  >
                    12 Sept 2022
                  </p>
                  <span 
                    className="badge" 
                    style={{
                      padding: "8px 10px",
                      borderRadius: "10px",
                      background: "#7B80891A",
                      color: "#7B8089",
                      marginTop: "5px"
                    }}
                  >
                    Pending
                  </span>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div 
                className="basic-row d-flex justify-content-between align-items-center p-3" 
                style={{
                  borderBottom: "1px solid #ddd",
                  borderRadius: "8px",
                  width: "100%",
                  maxWidth: "500px"
                }}
              >
                {/* صورة رمزية أو أيقونة */}
                <div 
                  className="rounded" 
                  style={{
                    backgroundColor: "#f9f1f1",
                    width: "40px",
                    height: "40px"
                  }}
                ></div>
      
                {/* محتوى الطلب */}
                <div className="d-flex flex-column flex-grow-1 mx-3">
                  <strong>Bakr</strong>
                  <span>LE520 × 4</span>
                </div>
      
                {/* التاريخ والحالة */}
                <div className="d-flex flex-column flex-grow-1 mx-3 align-items-center">
                  <p 
                    className="text-muted" 
                    style={{ fontSize: "14px", margin: "0" }}
                  >
                    12 Sept 2022
                  </p>
                  <span 
                    className="badge" 
                    style={{
                      padding: "8px 10px",
                      borderRadius: "10px",
                      background: "#7B80891A",
                      color: "#7B8089",
                      marginTop: "5px"
                    }}
                  >
                    Pending
                  </span>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div 
                className="basic-row d-flex justify-content-between align-items-center p-3" 
                style={{
                  borderBottom: "1px solid #ddd",
                  borderRadius: "8px",
                  width: "100%",
                  maxWidth: "500px"
                }}
              >
                {/* صورة رمزية أو أيقونة */}
                <div 
                  className="rounded" 
                  style={{
                    backgroundColor: "#f9f1f1",
                    width: "40px",
                    height: "40px"
                  }}
                ></div>
      
                {/* محتوى الطلب */}
                <div className="d-flex flex-column flex-grow-1 mx-3">
                  <strong>Bakr</strong>
                  <span>LE520 × 4</span>
                </div>
      
                {/* التاريخ والحالة */}
                <div className="d-flex flex-column flex-grow-1 mx-3 align-items-center">
                  <p 
                    className="text-muted" 
                    style={{ fontSize: "14px", margin: "0" }}
                  >
                    12 Sept 2022
                  </p>
                  <span 
                    className="badge" 
                    style={{
                      padding: "8px 10px",
                      borderRadius: "10px",
                      background: "#7B80891A",
                      color: "#7B8089",
                      marginTop: "5px"
                    }}
                  >
                    Pending
                  </span>
                </div>
              </div>
            </div>
            

            <button
                    className="btn btn-secondary text-white py-3 my-5"
                    onClick={() => setShowNewProductComponent(false)} // العودة للكومبوننت السابق
                >
                    Back to Recent Orders
                </button>
          </div>
          
            </>
           
          
        );
    }

    // الكومبوننت الأساسي
    return (
        <div className="card p-5 h-100 my-3 shadow">
            <h3 style={{ fontSize: '16px' }} className="mb-5">Recent Orders</h3>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <img src={iconContainer} className="my-5 py-5" alt="Orders Icon" />
                <h1 style={{ fontSize: '20px', fontWeight: '500' }}>No Orders Yet?</h1>
                <p
                    className="text-center mt-3 mb-5"
                    style={{ fontSize: '14px', fontWeight: '400', color: '#8B8D97' }}
                >
                    Add products to your store and start selling to see orders here.
                </p>
                <button
                    className="btn btn-danger text-white py-3 pe-5 my-5"
                    onClick={handleNewProductClick}
                >
                    <FaPlus className="text-white mx-3" /> New Product
                </button>
               
            </div>
        </div>
    );
};

export default RecentOrders;
