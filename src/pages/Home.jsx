import React from "react";
import studentImg from "../assets/student.jpg"; // นำเข้ารูปจากโฟลเดอร์

export default function Component() {
  return (
    <div className="flex flex-col items-center text-center">
      <img
        src={studentImg}
        alt="Student"
        className="w-40 h-40 rounded-full shadow-lg mb-4 object-cover"
      />
      <h1 className="text-2xl font-bold text-center ">ธีรภพ ยอยบุบผา</h1>
      <p className="text-center">รหัสนักศึกษา: 67177633</p>
      <p>ชั้นปีที่ 2 สาขาวิทยาการคอมพิวเตอร์</p>
      <p>คณะ เทคโนโลยีสารสนเทศ</p>
      <p className="mt-2 max-w-md">
        มันจะerrorอะไรหนักว่าาาาาาาาาาาาา
      </p>
    </div>
  );
}


