import React from "react";

export default function ListStudent() {
  return (
    <>
      {" "}
      <div>
        {" "}
        <div className="list">
          <button className="list_btn--themmoi">Thêm mới sinh viên</button>
          <form>
            <input
              className="list_input--themmoi"
              type="text"
              placeholder="Nhập tên sinh viên"
            />
            <button className="list_btn--timkiem">Tìm kiếm</button>
          </form>
          <button className="list_btn--sapxep">Sắp xếp</button>
        </div>
        <h2>Danh Sách Sinh Viên</h2>
        <table>
          <tr>
            <th>#</th>
            <th>Mã sinh viên</th>
            <th>Tên sinh viên</th>
            <th>Tuổi</th>
            <th>Giới tính</th>
            <th>Hành động</th>
          </tr>
          <tr>
            <td>1</td>
            <td>54654</td>
            <td>Huỳnh Công Tính</td>
            <td>26</td>
            <td>Nam</td>
            <td>
              <button className="list_table--btn--xem">Xem</button>
              <button className="list_table--btn--sua">Sửa</button>
              <button className="list_table--btn--xoa">Xóa</button>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
}
