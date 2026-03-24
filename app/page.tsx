export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50 p-6 pt-20 text-center font-sans">
      <div className="max-w-md space-y-6">
        {/* ロゴ部分 */}
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          NagAI Tech
        </h1>
        
        {/* 肩書き */}
        <p className="text-lg font-medium text-blue-600">
          Urban Planning × AI × Engineering
        </p>

        {/* 説明文 */}
        <p className="text-slate-500 leading-relaxed">
          都市計画の知見とIT技術を融合させた、次世代の都市開発ソリューションを準備中です。
        </p>

        {/* リンク（適宜自分のものに書き換えてください） */}
        <div className="flex justify-center space-x-6 pt-4 text-sm font-semibold text-slate-400">
          <a href="https://github.com/ynagai-nt" className="hover:text-slate-900 transition-colors">GitHub</a>
          <a href="mailto:y.nagai@nagai-tech.com" className="hover:text-slate-900 transition-colors">Contact</a>
        </div>
      </div>

      {/* コピーライト */}
      <footer className="absolute bottom-8 text-xs text-slate-400">
        © 2026 NagAI Tech
      </footer>
    </main>
  );
}