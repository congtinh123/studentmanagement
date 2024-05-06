export default function StudentEdit({ handleEdit, studentId }) {
  return (
    <div>
      <h2>Thông Tin Sinh Viên</h2>
      <form className="studentinfor_form" onSubmit={handleEdit}>
        <div className="studentinfor_form--input">
          <label>Mã sinh viên</label>
          <input type="text" disabled value={studentId} />
        </div>
        <div className="studentinfor_form--input">
          <label>Tên sinh viên</label>
          <input type="text" />
        </div>
        <div className="studentinfor_form--input">
          <label>Tuổi</label>
          <input type="text" />
        </div>
        <div className="studentinfor_form--input">
          <label>Giới Tính</label>
          <input type="text" />
        </div>
        <div className="studentinfor_form--input">
          <label>Ngày sinh</label>
          <input type="text" />
        </div>
        <div className="studentinfor_form--input">
          <label>Nơi sinh</label>
          <input type="text" />
        </div>
        <div className="studentinfor_form--input">
          <label>Địa chỉ</label>
          <input type="text" />
        </div>
        <button type="submit" className="studentinfor_form--btn--add">
          Edit
        </button>
      </form>
    </div>
  );
}
