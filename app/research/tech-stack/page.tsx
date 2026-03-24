import Link from 'next/link';

const groups = [
  {
    group: 'データセット',
    items: [
      {
        name: 'OSDG コミュニティデータセット',
        summary:
          'OSDG コミュニティプラットフォームのボランティアが作成した英語データセット。公開文書のテキストを対応する SDGs ゴールにラベル付けしたもので、約 43,000 件を収録。',
        reason:
          '各取組と SDGs ゴールの関係を示す大規模な英語データとして一般公開されており、分類タスクの教師データとして活用した。',
      },
      {
        name: 'SDGs 未来都市データセット',
        summary:
          '2025 年度までに選定された全 215 自治体の SDGs 未来都市計画から抽出した日本語データセット（約 2,000 件）。取組内容・SDGs ゴール・評価指標の三つ組を収録。',
        reason:
          '国内事例に対応した日本語データであり、分類・生成の両タスクに用いることができる唯一のデータセットとして採用した。',
      },
    ],
  },
  {
    group: 'テキストベクトル化',
    items: [
      {
        name: 'GLuCoSE V2（PKSHA Technology）',
        summary:
          '株式会社 PKSHA Technology が公開した日本語テキスト埋め込みモデル。文章を高次元ベクトルに変換し、コサイン類似度によって文書間の意味的類似度を算出できる。',
        reason:
          '商用利用可能なライセンスで公開されており、言語処理学会の性能評価ベンチマークで高性能と評価されたモデルであるため採用した。',
      },
    ],
  },
  {
    group: 'クラスタリング',
    items: [
      {
        name: 'k-means 法',
        summary:
          '非階層型クラスタリング手法。各データ点をクラスター重心との距離に基づいて k 個のクラスターのいずれかに分類し、クラスター内の分散を最小化する。',
        reason:
          'HDBSCAN・DBSCAN・階層的クラスタリングとシルエット係数で比較した結果、k-means 法が最も高い値（0.204）を示したため最適な手法として採用した。',
      },
    ],
  },
  {
    group: '分類モデル',
    items: [
      {
        name: 'xlm-roberta',
        summary:
          '大規模な多言語コーパスで事前学習された Transformer ベースの言語モデル。取組内容の文章から寄与する SDGs ゴールを予測するマルチラベル分類タスクに使用した。',
        reason:
          '英語（OSDG）と日本語（SDGs 未来都市）の混合教師データを扱う必要があり、多言語性能に優れたモデルが求められた。既往研究でも同様のタスクに採用実績がある。',
      },
      {
        name: 'フルファインチューニング',
        summary:
          '事前学習済みモデルの全パラメータを教師データで微調整する学習手法。モデルが持つ汎用的な言語表現を特定のタスクに最適化する。',
        reason:
          '分類タスクでは十分な教師データ（43,000 件超）が確保できており、全パラメータを微調整することで高い精度（F1: 0.78）を達成できると判断した。',
      },
    ],
  },
  {
    group: '生成モデル',
    items: [
      {
        name: 'retriva/t5-xl',
        summary:
          '株式会社レトリバが公開した日本語特化の T5 系テキスト生成モデル。入力テキストから条件に沿った出力テキストを生成する Seq2Seq アーキテクチャを持つ。',
        reason:
          '評価指標名のみを出力する条件付き生成には T5 系が適しており、教師データがすべて日本語であることから日本語特化モデルを選択した。',
      },
      {
        name: 'LoRA（Low-Rank Adaptation）',
        summary:
          'モデルの重み更新を低ランク行列の積に限定することで、学習するパラメータ数を大幅に削減するファインチューニング手法。元のモデル重みは凍結したまま追加の低ランク行列のみを学習する。',
        reason:
          '利用可能な GPU が A100 1 枚に限られており、生成モデルの全パラメータを微調整することは計算資源的に困難だった。LoRA を用いることで効率的な学習が可能となった。',
      },
    ],
  },
  {
    group: 'ハイパーパラメータ最適化',
    items: [
      {
        name: 'Optuna',
        summary:
          'ベイズ最適化に基づくハイパーパラメータ自動探索フレームワーク。モデルの性能評価関数を確率モデルで近似し、獲得関数によって次に評価すべきパラメータを効率的に選択する。',
        reason:
          'ハイパーパラメータの網羅的な探索は計算コストが非常に高い。Optuna のベイズ最適化を用いることで 20 回の学習・評価サイクルに抑えつつ最適なパラメータを得られた。',
      },
    ],
  },
  {
    group: '学習環境',
    items: [
      {
        name: 'Google Colab / NVIDIA A100 80GB',
        summary:
          'クラウドベースの Python 実行環境。本研究では 2026 年 1 月時点で利用可能な最高性能 GPU として NVIDIA A100 80GB を使用してモデルの学習・推論を実施した。',
        reason:
          '機械学習モデルの学習・推論には高性能 GPU が必要であり、手元の環境では確保できないため Google Colab を活用した。より高性能な H100 は安定した利用ができなかったため A100 を選択した。',
      },
    ],
  },
];

export default function TechStackPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-20 pb-16">
      <div className="max-w-2xl mx-auto px-6 space-y-12">

        {/* ページヘッダー */}
        <div className="space-y-3">
          <Link
            href="/about"
            className="text-sm font-semibold text-slate-400 hover:text-slate-700 transition-colors"
          >
            ← About に戻る
          </Link>
          <h1 className="text-2xl font-extrabold text-slate-900">Tech Stack</h1>
          <p className="text-slate-500 text-sm leading-relaxed">
            「都市開発事業における汎用的な SDGs 評価指標策定に関する研究」で使用した技術・ツールの概要と採用理由
          </p>
        </div>

        {/* 技術グループ */}
        {groups.map(({ group, items }) => (
          <section key={group}>
            <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">{group}</h2>
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.name} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 space-y-3">
                  <h3 className="font-bold text-slate-900">{item.name}</h3>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 mb-1">概要</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.summary}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 mb-1">採用理由</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.reason}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

      </div>
    </main>
  );
}
