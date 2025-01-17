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
	Download,
	Send,
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
			// Fallback copying mechanism
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

			<h2 className="text-2xl font-bold mb-4 text-center mt-8">
				결제 방법 안내
			</h2>

			<div className="grid gap-6 md:grid-cols-1">
				{/* Step 1 */}
				<div className="bg-white rounded-lg shadow-md overflow-hidden">
					<div className="p-6">
						<div className="flex items-center gap-2 mb-4">
							<Download className="w-5 h-5" />
							<h3 className="text-xl font-semibold">
								1단계: Phantom 지갑 설치
							</h3>
						</div>
						<div className="space-y-2">
							<p>
								• Chrome 웹 스토어에서 'Phantom' 지갑 확장 프로그램을 검색하거나{" "}
								<a
									href="https://phantom.app"
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-600 hover:text-blue-800 underline"
								>
									phantom.app
								</a>
								에서 다운로드하세요
							</p>
							<div className="my-4 bg-gray-100 rounded-lg overflow-hidden">
								<img
									src="/phantom-install.png"
									alt="Phantom 설치 화면"
									className="w-full h-auto object-cover"
								/>
							</div>
							<p>
								• 공식 Phantom 확장 프로그램을 설치하세요 (verified 마크 확인
								필수)
							</p>
						</div>
					</div>
				</div>

				{/* Step 2 */}
				<div className="bg-white rounded-lg shadow-md overflow-hidden">
					<div className="p-6">
						<div className="flex items-center gap-2 mb-4">
							<Wallet className="w-5 h-5" />
							<h3 className="text-xl font-semibold">2단계: 지갑 설정</h3>
						</div>
						<div className="space-y-2">
							<p>
								• 기존 지갑 복구를 선택하세. Key는 24개 입력란으로 전환 후
								입력하세요
							</p>
							<div className="my-4 bg-gray-100 rounded-lg overflow-hidden">
								<img
									src="/recover-wallet.png"
									alt="지갑 복구 화면"
									className="w-full h-auto object-cover"
								/>
							</div>
							<p>• select the option for Add a secret phrase</p>
							<div className="my-4 bg-gray-100 rounded-lg overflow-hidden">
								<img
									src="/secret-phrase.png"
									alt="지갑 복구 화면"
									className="w-full h-auto object-cover"
								/>
								<img
									src="/24keys.png"
									alt="지갑 복구 화면"
									className="w-full h-auto object-cover"
								/>
							</div>
							<p>• 안전한 비밀번호를 설정하세요</p>
							<img
								src="/password.png"
								alt="지갑 복구 화면"
								className="w-full h-auto object-cover"
							/>
						</div>
					</div>
				</div>

				{/* Step 3 */}
				<div className="bg-white rounded-lg shadow-md overflow-hidden">
					<div className="p-6">
						<div className="flex items-center gap-2 mb-4">
							<Send className="w-5 h-5" />
							<h3 className="text-xl font-semibold">3단계: 토큰 전송</h3>
						</div>
						<div className="space-y-2">
							<p>1. Phantom 지갑을 키세요.</p>
							<img
								src="/open-phantom.png"
								alt="토큰 전송 화면"
								className="w-full h-auto object-cover"
							/>
							<p>2. Phantom 지갑에서 'Send' 버튼을 클릭하세요</p>
							<div className="my-4 bg-gray-100 rounded-lg overflow-hidden">
								<img
									src="/send-button.png"
									alt="토큰 전송 화면"
									className="w-full h-auto object-cover"
								/>
							</div>
							<p>
								3. 솔라나를 선택 후, 아래 주소를 복사하여 받는 사람 주소란에
								입력하세요:
							</p>
							<div className="bg-gray-100 p-3 rounded-md mt-2 break-all">
								<span className="text-gray-900">{walletAddress}</span>
								{copyButton}
							</div>
							<img
								src="/enter-address.png"
								alt="토큰 전송 화면"
								className="w-full h-auto object-cover"
							/>
							<p>3. 결제하실 금액을 입력하세요</p>
							<p>4. 거래 수수료를 확인하시고 '확인'을 클릭하세요</p>
						</div>
					</div>
				</div>

				<div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
					<h3 className="font-semibold text-yellow-800 mb-2">주의사항</h3>
					<ul className="text-yellow-700 space-y-1">
						<li>• 송금 전 주소를 반드시 더블체크해주세요</li>
						<li>
							• 거래 수수료를 위해 충분한 SOL을 보유하고 있는지 확인해주세요
						</li>
						<li>• 지갑 비밀번호와 시드구문은 절대 타인과 공유하지 마세요</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default LevelTestPoster;
