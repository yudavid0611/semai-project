import React, {useState} from "react";
import {Button, RedButton, SemesButton} from "../ButtonComponents";
import useTransferBoltImages from "../../_hooks/useTransferBoltImages";
import {TransferBoltImageObject} from "../../_utils/Types";


function TransferButtons() {
  const { TransferClass, TransferLearning, DeleteImages } = useTransferBoltImages();
  let [isConfirmOpen, setIsConfirmOpen] = useState<boolean>(false);
  let TransferValue = ['양호로 이동', '유실로 이동', '파단으로 이동', '학습으로 이동', '삭제하기', ];
  // 제출 버튼
  // 0: 양호 , 1: 유실, 2: 파단

  const ConfirmModal = isConfirmOpen ?
    <div>
      <div style={{position: "absolute", top: "100px", left: "100px"}}>
        안녕하세요
      </div>
    </div> :
    <></>

  const OpenConfirmModal = (nextType: number) => {
    switch (nextType) {
      case 0:
        return <Button onClick={ () => setIsConfirmOpen(true) }>{ TransferValue[0] }</Button>
      case 1:
        return <Button onClick={ () => setIsConfirmOpen(true) }>{ TransferValue[1] }</Button>
      case 2:
        return <Button onClick={ () => setIsConfirmOpen(true) }>{ TransferValue[2] }</Button>
      case 3:
        return <SemesButton onClick={ () => setIsConfirmOpen(true) }>{ TransferValue[3] }</SemesButton>
      case 4:
        return <RedButton onClick={ () => setIsConfirmOpen(true) }>{ TransferValue[4] }</RedButton>
    }
  }
  const CancelButton = () => {
    return <Button onClick={ () => setIsConfirmOpen(false) }>취소하기</Button>
  }

  /** 다른 클래스로 이동하기  */
  const TransferClassButton = (preType: number, nextType: number, fileIds: number[]) => {
    switch (nextType) {
      case 0:
        return <Button onClick={ () => TransferClass(preType, nextType, fileIds) }>{ TransferValue[0] }</Button>
      case 1:
        return <Button onClick={ () => TransferClass(preType, nextType, fileIds) }>{ TransferValue[1] }</Button>
      case 2:
        return <Button onClick={ () => TransferClass(preType, nextType, fileIds) }>{ TransferValue[2] }</Button>
    }
  }

  const TransferLearningButton = (fileIds: number[]) => {
    return <SemesButton onClick={ () => TransferLearning(fileIds) }>{ TransferValue[3] }</SemesButton>
  }
  const DeleteImagesButton = (preType: number,
                              selected: TransferBoltImageObject[],
                              setSelected: React.Dispatch<React.SetStateAction<TransferBoltImageObject[][]>>) => {
    return <RedButton onClick={() => {
      DeleteImages(selected.map(d => d.fileId))
      setSelected(prev => {
        const tmp = [...prev]
        tmp[preType] = []
        return [...tmp]
      });
    }}>{TransferValue[4]}</RedButton>
  }
  return { ConfirmModal, OpenConfirmModal, CancelButton, TransferClassButton, TransferLearningButton, DeleteImagesButton }
}

export default TransferButtons;