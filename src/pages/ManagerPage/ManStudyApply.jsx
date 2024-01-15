import React from 'react'
import './ManStudyApply.css';

function ManStudyApply() {
  return (
    <div className='ManStudyApply'>
    <div className='ManStudyApply-title'>스터디 등록</div>
    <div className='ManStudyApply-box'>
      <input class="ManStudyApply-name"
              type='text'
              placeholder='스터디 이름을 입력하세요 *' autoFocus></input></div>
              <div className='ManStudyApply-box'>
      <input class="ManStudyApply-content"
              type='text'
              placeholder='스터디 내용을 입력하세요 *' autoFocus></input></div>
              <div className='ManStudyApply-box'>
      <input class="ManStudyApply-number"
              type='text'
              placeholder='기수을 입력하세요 *' autoFocus></input></div>
              <div className='ManStudyApply-box'>
      <input class="ManStudyApply-book"
              type='text'
              placeholder='교재를 입력하세요 ' autoFocus></input></div>
              <div className='ManStudyApply-box'>
      <input class="ManStudyApply-lecture"
              type='text'
              placeholder='강의를 입력하세요 ' autoFocus></input></div>
              <div className='ManStudyApply-box'>
      <input class="ManStudyApply-notion"
              type='text'
              placeholder='노션을 입력하세요' autoFocus></input></div>

      <div className='ManStudyApply-subtitle'>주차 별 활동 내역</div>

      <div className='ManStudyApply-box'>
      <input class="ManStudyApply-1weeks"
              type='text'
              placeholder='1주차' autoFocus></input></div>
              <div className='ManStudyApply-box'>
      <input class="ManStudyApply-2weeks"
              type='text'
              placeholder='2주차' autoFocus></input></div>
              <div className='ManStudyApply-box'>
      <input class="ManStudyApply-3weeks"
              type='text'
              placeholder='3주차' autoFocus></input></div>

              <button className='plus'></button>

      <div className='ManStudyApply-picture'>썸네일 사진</div>
      <button className='ManStudyApply-select'>사진 선택</button>
      <div className='ManStudyApply-activ'>활동 사진</div>
      <button className='ManStudyApply-select'>사진 선택</button>

      <button className='ManStudyApply-button'>스터디 등록</button>

    </div>
  )
}

export default ManStudyApply