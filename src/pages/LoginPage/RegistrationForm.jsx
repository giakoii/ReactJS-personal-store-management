import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import config from "../../config";

const RegistrationForm = () => {
    const [form, setForm] = useState({
        userName: "",
        password: "",
        confirmPassword: "",
        email: "",
        fullName: "",
        nickName: "",
        phone: "",
        address: "",
        termsAccepted: false,
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({
            ...form,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        const userDTO = {
            userName: form.name,
            nickName: form.nickName,
            email: form.email,
            password: form.password,
            fullName: form.name,
            phone: form.phone,
            address: form.address,
        };

        e.preventDefault();
        if (form.password !== form.confirmPassword) {
            alert("Mật khẩu không khớp");
            return;
        }
        if (!form.termsAccepted) {
            alert("You must accept the terms and conditions");
            return;
        }

        try {
            const response = await fetch(`${config.apiUrl}/users/create`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userDTO),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log("User created successfully:", data);
            // Redirect or show success message
        } catch (error) {
            console.error("Error:", error);
            alert("Registration failed: " + error.message);
        }

    };



    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-500">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold text-gray-700 text-center">Mẫu đăng ký</h2>
                <form onSubmit={handleSubmit} className="mt-6">
                    <div className="mb-4">
                        <input
                            type="text"
                            name="userName"
                            placeholder="Nhập tên đăng nhập"
                            value={form.userName}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            name="password"
                            placeholder="Nhập mật khẩu"
                            value={form.password}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Xác nhận mật khẩu"
                            value={form.confirmPassword}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="email"
                            name="email"
                            placeholder="Nhập email của bạn"
                            value={form.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Nhập tên đầy đủ"
                            value={form.fullName}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            name="nickName"
                            placeholder="Nhập biệt danh nhà tôi hay gọi"
                            value={form.nickName}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            name="phone"
                            placeholder="Nhập số điện thoại"
                            value={form.phone}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            name="address"
                            placeholder="Nhập địa chỉ"
                            value={form.address}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex items-center mb-4">
                        <input
                            type="checkbox"
                            name="termsAccepted"
                            checked={form.termsAccepted}
                            onChange={handleInputChange}
                            className="mr-2"
                        />
                        <label className="text-sm text-gray-600">I accept all terms & conditions</label>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
                        >
                            Đăng ký
                        </button>
                    </div>
                    <div className="mt-4 text-center">
                        <p className="text-gray-600">
                            Nếu bạn đã có tài khoản? Xin hãy đăng nhập.{" "}
                            <Link to={"/Login"} className="text-blue-500 hover:underline">
                                Đăng nhập
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegistrationForm;