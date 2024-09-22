'use client'

import { useState } from 'react'
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon } from '@heroicons/react/20/solid'
import { UserIcon} from "@heroicons/react/16/solid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {Link} from "react-router-dom";
import {faKiwiBird} from "@fortawesome/free-solid-svg-icons";

const products = [
    { name: 'Mít', description: 'Get a better understanding of your traffic', href: '#', icon:() => <FontAwesomeIcon icon={faKiwiBird} />},
    { name: 'Yến', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
]
const callsToAction = [
    // { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    // { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

const HeaderComponent = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-emerald-600">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <Link to={"/HomePage"} className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img alt="Logo" src="../../image/logotamthoi.jpeg" className="h-8 w-auto" />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                    <Popover className="relative">
                        <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                            Sản Phẩm
                            <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                        </PopoverButton>

                        <PopoverPanel
                            transition
                            className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                            <div className="p-4">
                                {products.map((item) => (
                                    <div
                                        key={item.name}
                                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                    >
                                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                            <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                                        </div>
                                        <div className="flex-auto">
                                            <a href={item.href} className="block font-semibold text-gray-900">
                                                {item.name}
                                                <span className="absolute inset-0" />
                                            </a>
                                            <p className="mt-1 text-gray-600">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                {callsToAction.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                                    >
                                        <item.icon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </PopoverPanel>
                    </Popover>

                    <Link to={"/AboutPage"} className="text-sm font-semibold leading-6 text-gray-900">
                        Giới thiệu
                    </Link>
                    <Link to={"/PricePage"} className="text-sm font-semibold leading-6 text-gray-900">
                        Giá cả
                    </Link>
                </PopoverGroup>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link to={"/Login"} className="text-sm font-semibold leading-6 text-gray-900">
                        Đăng nhập <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-emerald-600 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 shadow-gray-400">
                    <div className="flex items-center justify-between">
                        <Link to={"/HomePage"} className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                alt=""
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                className="h-8 w-auto"
                            />
                        </Link>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Disclosure as="div" className="-mx-3">
                                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                        Product
                                        <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                                    </DisclosureButton>
                                    <DisclosurePanel className="mt-2 space-y-2">
                                        {[...products, ...callsToAction].map((item) => (
                                            <DisclosureButton
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </DisclosureButton>
                                        ))}
                                    </DisclosurePanel>
                                </Disclosure>
                                <Link to={"/AboutPage"}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Giới thiệu
                                </Link>
                                <Link to={"/PricePage"}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Giá cả
                                </Link>
                                <Link to=""
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Company
                                </Link>
                            </div>
                            <div className="py-6">
                                <Link to={"/Login"}
                                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 transition-all"
                                >
                                    Đăng nhập <span aria-hidden="true">&rarr;</span>
                                    <UserIcon width={30}/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}


export default HeaderComponent;


// import React from "react";
// import {Col, Row} from "antd";
// import {WrapperContextHeader, WrapperHeader, WrapperHeaderAccount, WrapperHeaderCart, WrapperHeaderText} from "./style";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Input} from 'antd';
// import {UserOutlined, CaretDownOutlined, ShoppingCartOutlined} from '@ant-design/icons';
//
// const {Search} = Input;
//
// const HeaderComponent = () => {
//     return (
//         <WrapperHeader>
//             <Col span={6}>
//                 <WrapperContextHeader>
//                     Vựa mít - yến Khoa
//                 </WrapperContextHeader>
//             </Col>
//             <Col span={11}>
//                 <Search
//                     placeholder="Nhập sản phẩm cần tìm"
//                     enterButton="Tìm kiếm"
//                     size="large"
//                 />
//             </Col>
//
//             <Col span={7} style={ {display: 'flex' , gap: '30px'}}>
//                 <WrapperHeaderAccount>
//                     <UserOutlined style={{fontSize: '30px', color: '#fff'}}/>
//                     <div>
//                         <WrapperHeaderText>Đăng nhập/Đăng ký</WrapperHeaderText>
//                         <div>
//                             <WrapperHeaderText>Tài khoản</WrapperHeaderText>
//                             <CaretDownOutlined/>
//                         </div>
//                     </div>
//                 </WrapperHeaderAccount>
//                     <div>
//                         <WrapperHeaderCart>
//                             <ShoppingCartOutlined style={{fontSize: '30px', color: '#fff'}}/>
//                             <WrapperHeaderText>Giỏ hàng</WrapperHeaderText>
//                         </WrapperHeaderCart>
//                     </div>
//             </Col>
//         </WrapperHeader>
//     )
// }
//
// export default HeaderComponent;

