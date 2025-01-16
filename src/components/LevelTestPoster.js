"use client";

import React, { useState, useEffect } from "react";
import {
	BookOpen,
	Calendar,
	Clock,
	DollarSign,
	Wallet,
	Copy,
	Check,
} from "lucide-react";

const LevelTestPoster = () => {
	const [copied, setCopied] = useState(false);
	const [mounted, setMounted] = useState(false);
	const walletAddress = "33KU6QZyfhP3JznJp4B92jn9CQS88fq2L1JVVpdxoJfx";

	useEffect(() => {
		setMounted(true);
	}, []);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(walletAddress);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch (err) {
			console.error("Failed to copy text: ", err);
			const textArea = document.createElement("textarea");
			textArea.value = walletAddress;
			document.body.appendChild(textArea);
			textArea.select();
			try {
				document.execCommand("copy");
				setCopied(true);
				setTimeout(() => setCopied(false), 2000);
			} catch (err) {
				console.error("Fallback copying failed:", err);
			}
			document.body.removeChild(textArea);
		}
	};

	const copyButton = mounted ? (
		<button
			onClick={handleCopy}
			className="ml-2 p-2 rounded-lg hover:bg-gray-200 transition-colors"
			aria-label="Copy wallet address"
		>
			{copied ? (
				<Check className="text-green-600" size={20} />
			) : (
				<Copy className="text-gray-600" size={20} />
			)}
		</button>
	) : null;

	return (
		<div className="bg-blue-50 p-8 rounded-lg max-w-2xl mx-auto font-sans text-gray-900">
			{/* Header */}
			<div className="text-center mb-8">
				<h1 className="text-3xl font-bold text-blue-800 mb-2">
					무료 레벨 테스트 결과
				</h1>
				<div className="w-24 h-1 bg-blue-500 mx-auto"></div>
			</div>
			{/* Content Sections */}
			<div className="space-y-6">
				{/* Textbook Section */}
				<div className="bg-white p-6 rounded-lg shadow-md">
					<div className="flex items-center gap-3 mb-4">
						<BookOpen className="text-blue-600" size={24} />
						<h2 className="text-xl font-bold text-blue-800">교재 정보</h2>
					</div>
					<p className="text-lg text-gray-900 mb-2">
						Wonderful WORLD BASIC LEVEL 1
					</p>
					<p className="text-blue-600 font-semibold">가격: 16 SGT</p>
					<p className="text-sm text-gray-600 mt-2">
						* 다음 교재는 현재 교재 완료 후 추가 구매 예정입니다
					</p>
				</div>
				{/* Schedule Section */}
				<div className="bg-white p-6 rounded-lg shadow-md">
					<div className="flex items-center gap-3 mb-4">
						<Calendar className="text-blue-600" size={24} />
						<h2 className="text-xl font-bold text-blue-800">수업 일정</h2>
					</div>
					<div className="space-y-2 text-gray-900">
						<p className="text-lg">주 3회 수업 (목, 금, 토)</p>
						<p className="text-lg">기간: 6개월</p>
						<p className="text-lg font-semibold">총 수업 횟수: 72회</p>
					</div>
				</div>
				{/* Pricing Section */}
				<div className="bg-white p-6 rounded-lg shadow-md">
					<div className="flex items-center gap-3 mb-4">
						<DollarSign className="text-blue-600" size={24} />
						<h2 className="text-xl font-bold text-blue-800">수업료 안내</h2>
					</div>
					<div className="space-y-2 text-gray-900">
						<p className="text-lg">교재비: 16 SGT</p>
						<p className="text-lg">수업료: 1,440 SGT</p>
						<div className="mt-4 pt-4 border-t border-gray-200">
							<p className="text-xl font-bold text-blue-800">합계: 1,456 SGT</p>
						</div>
					</div>
				</div>
				{/* Wallet Address Section */}
				<div className="bg-white p-6 rounded-lg shadow-md">
					<div className="flex items-center gap-3 mb-4">
						<Wallet className="text-blue-600" size={24} />
						<h2 className="text-xl font-bold text-blue-800">결제 정보</h2>
					</div>
					<div className="flex items-center justify-center gap-4">
						<img src="/qr-code.jpeg" alt="QR Code" className="w-32 h-32" />
						<div className="bg-gray-50 p-4 rounded-lg break-all font-mono text-sm flex-1 flex items-center justify-between min-h-[8rem] group">
							<span className="text-gray-900">{walletAddress}</span>
							{copyButton}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LevelTestPoster;
