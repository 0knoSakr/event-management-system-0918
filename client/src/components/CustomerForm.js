import React from 'react';

const CustomerForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>会社名:</label>
        <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} />
      </div>
      <div>
        <label>担当者名:</label>
        <input type="text" name="contactPerson" value={formData.contactPerson} onChange={handleChange} />
      </div>
      <div>
        <label>メールアドレス:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <div>
        <label>電話番号:</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
      </div>
      <div>
        <button type="submit">送信</button>
      </div>
    </form>
  )
};

export default CustomerForm;
