const research = {
  title: '都市開発事業における汎用的な SDGs 評価指標策定に関する研究',
  titleEn: 'A Study on Key Performance Indicators of SDGs for Urban Development Projects',
  journal: '公益社団法人日本都市計画学会 都市計画報告集 No.24',
  date: '2026年2月',
  authors: '永井雄也・村木美貴（千葉大学）',
  abstract:
    '都市開発事業を SDGs の観点から評価することはプロジェクトの特性や評価基準の多様性から複雑性が高い。本研究では機械学習を活用して都市開発における汎用的な SDGs 評価指標の策定方法を明らかにした。都市再生特別地区における取組内容のクラスタリング分析により 36 件の汎用的取組を抽出し、教師あり学習による SDGs 分類モデル・評価指標生成モデルを構築することで、人手によらないデータドリブンな指標策定を実現した。',
  techTags: ['Python', '機械学習', 'NLP', 'k-means', 'SDGs', '都市計画', 'T5', 'XLM-RoBERTa', 'Optuna'],
  results: [
    { label: 'SDGs 分類モデル精度（F1）', value: '0.78' },
    { label: '評価指標生成モデル精度（F1）', value: '0.03（教師データ増加で改善予定）' },
  ],
};

const projects = [
  {
    title: 'NagAI Tech サイト',
    description: '本ポートフォリオサイト。Next.js と Tailwind CSS を用いて構築。',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  },
];

import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-20 pb-16">
      <div className="max-w-2xl mx-auto px-6 space-y-16">

        {/* プロフィール・経歴 */}
        <section>
          <h2 className="text-2xl font-extrabold text-slate-900 mb-6">Profile</h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 space-y-4">
            <div>
              <p className="text-xl font-bold text-slate-900">永井　雄也 / Yuya Nagai</p>
              <p className="text-blue-600 font-medium mt-1">Urban Planning × AI × Engineering</p>
            </div>
            <p className="text-slate-600 leading-relaxed">
              千葉大学大学院で都市計画を専攻し、修士課程では AI・機械学習を都市開発評価に応用する研究に取り組みました。
              IT・AI 技術が都市計画の課題解決にどう活かせるか、修了後も引き続き学びながら探っています。
            </p>
            <div className="flex gap-4 pt-2 text-sm font-semibold">
              <a
                href="https://github.com/ynagai-nt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-slate-900 transition-colors"
              >
                GitHub →
              </a>
              <a
                href="mailto:y.nagai@nagai-tech.com"
                className="text-slate-500 hover:text-slate-900 transition-colors"
              >
                Contact →
              </a>
            </div>
          </div>
        </section>

        {/* 実績・プロジェクト */}
        <section>
          <h2 className="text-2xl font-extrabold text-slate-900 mb-6">Projects</h2>
          <div className="space-y-4">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
              >
                <h3 className="font-bold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-50 text-blue-600 text-xs font-semibold px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 研究 */}
        <section>
          <h2 className="text-2xl font-extrabold text-slate-900 mb-6">Research</h2>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 space-y-6">

            {/* 論文情報 */}
            <div>
              <h3 className="font-bold leading-snug">
                <a
                  href="https://www.jstage.jst.go.jp/article/reportscpij/24/4/24_624/_pdf/-char/ja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-900 hover:text-blue-600 transition-colors"
                >
                  {research.title}
                </a>
              </h3>
              <p className="text-slate-400 text-sm mt-1">{research.titleEn}</p>
              <p className="text-slate-500 text-xs mt-2">
                {research.journal}・{research.date}・{research.authors}
              </p>
              <p className="text-slate-400 text-xs mt-1">※ 都市計画報告集は、査読プロセスの無い論文報告集です。</p>
            </div>

            {/* 概要 */}
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">概要</p>
              <p className="text-slate-600 text-sm leading-relaxed">{research.abstract}</p>
            </div>

            {/* 使用技術 */}
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">使用技術・手法</p>
              <div className="flex flex-wrap gap-2">
                {research.techTags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-white border border-slate-200 text-slate-700 text-sm font-medium px-3 py-1 rounded-full shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* 主な成果 */}
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">主な成果</p>
              <div className="space-y-2">
                {research.results.map((r) => (
                  <div key={r.label} className="flex justify-between items-baseline gap-4">
                    <span className="text-slate-600 text-sm">{r.label}</span>
                    <span className="text-slate-900 font-semibold text-sm whitespace-nowrap">{r.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 技術スタックリンク */}
            <div className="pt-2">
              <Link
                href="/research/tech-stack"
                className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
              >
                技術スタックの詳細 →
              </Link>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}
