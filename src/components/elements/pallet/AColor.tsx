import React from 'react'

/**
 * カラーパレットのカラーを表示するコンポーネント
 * @param hex カラーの16進数コード
 * @returns 
 */
const AColor = ({
  hex
}: {
  hex: string;
}) => {
  return (
    <div className={`w-10 h-10 rounded-lg`} style={{ backgroundColor: hex }}></div>
  )
}

export default AColor