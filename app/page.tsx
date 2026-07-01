"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [bonus, setBonus] = useState("");
  const [insurance, setInsurance] = useState("15");
  const [tax, setTax] = useState("10");

  const bonusNum = Number(bonus) || 0;
  const insuranceNum = Number(insurance) || 0;
  const taxNum = Number(tax) || 0;

  const insuranceAmount = Math.floor(bonusNum * (insuranceNum / 100));
  const taxAmount = Math.floor(bonusNum * (taxNum / 100));
  const totalDeduction = insuranceAmount + taxAmount;
  const takeHome = bonusNum - totalDeduction;

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow">
        <h1 className="text-2xl font-bold mb-3">
          ボーナス手取り計算ツール
        </h1>

        <p className="text-gray-700 mb-6">
          ボーナスの支給額から社会保険料や税金を差し引いた、おおよその手取り額を計算できます。
        </p>

        <div className="space-y-4">
          <div>
            <label>ボーナス支給額（円）</label>
            <input
              type="number"
              value={bonus}
              onChange={(e) => setBonus(e.target.value)}
              className="w-full border p-2 rounded mt-1"
              placeholder="例：500000"
            />
          </div>

          <div>
            <label>社会保険料（%）</label>
            <input
              type="number"
              value={insurance}
              onChange={(e) => setInsurance(e.target.value)}
              className="w-full border p-2 rounded mt-1"
            />
          </div>

          <div>
            <label>税金（%）</label>
            <input
              type="number"
              value={tax}
              onChange={(e) => setTax(e.target.value)}
              className="w-full border p-2 rounded mt-1"
            />
          </div>
        </div>

        <div className="mt-8 space-y-2 text-lg border-t pt-6">
          <p>社会保険料: ¥{insuranceAmount.toLocaleString()}</p>
          <p>税金: ¥{taxAmount.toLocaleString()}</p>
          <p>控除額合計: ¥{totalDeduction.toLocaleString()}</p>

          <p className="font-bold text-green-600 text-xl">
            手取り額: ¥{takeHome.toLocaleString()}
          </p>
        </div>
<section className="mt-12 text-left max-w-3xl mx-auto space-y-6">

  <div>
    <h2 className="text-2xl font-bold mb-3">
      ボーナス50万円の手取り額はいくら？
    </h2>
    <p>
      ボーナスは支給額そのまま受け取れるわけではありません。
      健康保険料や厚生年金などの社会保険料が差し引かれるため、
      実際の手取り額は額面より少なくなります。
      例えばボーナス50万円の場合、手取りはおよそ40万円前後になるケースがあります。
    </p>
  </div>

  <div>
    <h2 className="text-2xl font-bold mb-3">
      夏と冬のボーナスで年間いくら受け取れる？
    </h2>
    <p>
      会社員の場合、夏と冬にボーナスが支給されることが多いです。
      1回50万円支給されても、年間では100万円支給される計算になります。
      ただし実際の手取り額は控除後の金額になるため注意が必要です。
    </p>
  </div>

  <div>
    <h2 className="text-2xl font-bold mb-3">
      ボーナス額面60万円と80万円ではどれくらい差が出る？
    </h2>
    <p>
      額面60万円と80万円では手取り額にも大きな差が生まれます。
      事前に手取り額を計算しておくことで、
      貯金計画や支出計画を立てやすくなります。
      ボーナスの使い道を考える前に確認しておくことがおすすめです。
    </p>
  </div>

  <div>
    <h2 className="text-2xl font-bold mb-3">
      よくある質問
    </h2>
    <p>
      Q. ボーナスにも税金はかかりますか？<br />
      A. 所得税や社会保険料が差し引かれます。<br /><br />

      Q. 手取り額は会社によって違いますか？<br />
      A. 加入している保険や給与条件によって異なります。
    </p>
  </div>

</section>
        <section className="mt-10">
          <h2 className="text-xl font-bold mb-3">
            ボーナス手取り計算ツールについて
          </h2>
          <p className="text-gray-700 leading-relaxed">
            このツールは、ボーナスの支給額に対して社会保険料や税金の割合を入力し、
            おおよその控除額と手取り額を確認するための簡易計算ツールです。
            実際の手取り額は勤務先、扶養状況、前月給与、社会保険料率などによって変わるため、
            目安としてご利用ください。
          </p>
        </section>

        <section className="mt-10">
         <h2 className="text-xl font-bold mb-3">
  他の便利ツール
</h2>

<ul className="list-disc pl-6 space-y-2 text-blue-600 underline">
  <li>
    <a href="https://wage-calc-tawny.vercel.app/">
      時給計算ツール
    </a>
  </li>
  <li>
    <a href="https://overtime-calc.vercel.app/">
      残業代計算ツール
    </a>
  </li>
  <li>
    <a href="https://take-home-pay-calc.vercel.app/">
      手取り計算ツール
    </a>
  </li>
  <li>
    <a href="https://annual-income-calc.vercel.app/">
      年収計算ツール
    </a>
  </li>
  <li>
    <a href="https://monthly-salary-calc.vercel.app/">
      月給計算ツール
    </a>
  </li>
  <li>
    <a href="https://daily-wage-calc.vercel.app/">
      日給計算ツール
    </a>
  </li>
  <li>
    <a href="https://tax-calc-murex.vercel.app/">
      所得税計算ツール
    </a>
  </li>
  <li>
    <a href="https://hourly-to-annual-calc.vercel.app/">
      時給から年収計算ツール
    </a>
  </li>
  <li>
    <a href="https://working-days-calc.vercel.app/">
      労働日数計算ツール
    </a>
  </li>
</ul>
        </section>
<section className="mt-10">
  <h2 className="text-xl font-bold mb-3">
    ボーナス手取りの計算方法
  </h2>

  <p className="text-gray-700 leading-relaxed">
    ボーナス（賞与）の手取り額は、
    支給額から社会保険料や所得税を差し引いて計算されます。
    会社員の場合、健康保険料・厚生年金保険料・雇用保険料などが控除され、
    さらに所得税が引かれます。
    このツールでは簡単に概算の手取り額を確認できます。
  </p>
</section>
<section className="mt-10">
  <h2 className="text-xl font-bold mb-3">
    このサイトについて
  </h2>

  <p className="text-gray-700 leading-relaxed">
    ANT FARMでは、日常生活や仕事に役立つ無料Webツールを公開しています。
    このボーナス手取り計算ツールでは、
    賞与支給額から控除額を差し引いたおおよその手取り額を簡単に確認できます。
    インストール不要でスマホからも利用できます。
  </p>
</section>
        <footer className="mt-10 pt-6 border-t text-sm text-gray-500">
          <p>© ANT FARM</p>
          <Link href="/privacy-policy" className="underline">
            プライバシーポリシー
          </Link>
        </footer>
      </div>
    </main>
  );
}