import React from "react";
import "./EPapers.css";

const PDFSection = () => {
  const pdfs = [
    {
      id: 1,
      title: "PDF 1",
      pdfUrl: "../../Assets/Aryan_Shrivastava_Present.pdf", // Adjust the path
    },
    {
      id: 1,
      title: "PDF 1",
      pdfUrl: "../../Assets/Aryan_Shrivastava_Present.pdf", // Adjust the path
    },
    {
      id: 1,
      title: "PDF 1",
      pdfUrl: "../../Assets/Aryan_Shrivastava_Present.pdf", // Adjust the path
    },
    {
      id: 1,
      title: "PDF 1",
      pdfUrl: "../../Assets/Aryan_Shrivastava_Present.pdf", // Adjust the path
    },
    // Add more PDFs
  ];

  return (
    <section className="pdf-section">
      <h2 className="section-title">PDFs</h2>
      <div className="pdf-list">
        {pdfs.map((pdf) => (
          <div key={pdf.id} className="pdf-card">
            <a href={pdf.pdfUrl} target="_blank" rel="noopener noreferrer">
              {pdf.title}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PDFSection;
