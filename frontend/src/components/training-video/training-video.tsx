import { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  isCurrentTrainingActive,
  isTrainingFormHasVideo,
  isTrainingInfoEditing,
  setVideoPresence,
} from '../../store';
import { TrainingVideoInput, Preloader } from '../../components';
import { getTrainingVideo } from '../../store';
import { getFileUrl } from '../../utils/common';
import VideoControls from './video-controls';
import PlayButton from './play-button';
import cn from 'classnames';

type TrainingVideoProps = {
  newVideo: Blob | null;
  setFile: (file: File | null) => void;
  onSave: () => void;
};

function TrainingVideo({
  newVideo,
  setFile,
  onSave,
}: TrainingVideoProps): JSX.Element {
  const dispatch = useAppDispatch();
  const video = useAppSelector(getTrainingVideo);
  const hasVideo = useAppSelector(isTrainingFormHasVideo);
  const isWorkoutActive = useAppSelector(isCurrentTrainingActive);
  const isEdited = useAppSelector(isTrainingInfoEditing);

  const [isPlaying, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isEdited) {
      dispatch(setVideoPresence(true));
    }
  }, [dispatch, isEdited]);

  const handlePlayButtonClick = () => {
    videoRef.current?.play();
    setPlaying(true);
  };

  if (!video) {
    return <Preloader />;
  }

  return (
    <div
      className={cn('training-video', {
        'training-video--load': isEdited && !hasVideo,
        'training-video--stop': isWorkoutActive,
      })}
    >
      <h2 className="training-video__title">Видео</h2>
      <div className="training-video__video">
        <div className="training-video__thumbnail">
          <video
            ref={videoRef}
            width={922}
            height={566}
            controls={isPlaying}
            src={
              isEdited && newVideo
                ? URL.createObjectURL(newVideo)
                : getFileUrl(video)
            }
          />
        </div>
        {isPlaying ? undefined : <PlayButton onClick={handlePlayButtonClick} />}
      </div>
      <div className="training-video__drop-files">
        <form action="#" method="post" role='form'>
          <div className="training-video__form-wrapper">
            <TrainingVideoInput setFile={setFile} />
          </div>
        </form>
      </div>
      <div className="training-video__buttons-wrapper">
        {isEdited ? (
          <div className="training-video__edit-buttons">
            <button
              className="btn"
              type="button"
              disabled={!newVideo}
              onClick={() => {
                onSave();
              }}
            >
              Сохранить
            </button>
            <button
              className="btn btn--outlined"
              type="button"
              disabled={!hasVideo}
              onClick={() => {
                dispatch(setVideoPresence(false));
                setFile(null);
              }}
            >
              Удалить
            </button>
          </div>
        ) : (
          <VideoControls />
        )}
      </div>
    </div>
  );
}

export default TrainingVideo;
