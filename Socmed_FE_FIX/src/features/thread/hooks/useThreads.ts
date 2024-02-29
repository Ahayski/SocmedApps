import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/types/rootState";
import { IThreadPost } from "../../../interface/thread";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { API } from "../../../libs/api";
import { GET_THREADS } from "../../../store/rootReducer";

export function useThreads() {
  const dispatch = useDispatch();
  const thread = useSelector((state: RootState) => state.thread.threads);

  const [form, setForm] = useState<IThreadPost>({
    content: "",
    image_thread: "",
  });

  async function getThreads() {
    const response = await API.get("/thread");
    console.log("ini thread response", response);
    dispatch(GET_THREADS(response.data.threads));
  }

  async function handlePost(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("content", form.content);
      formData.append("image_thread", form.image_thread as File);
      await API.post("/thread", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
    getThreads();
  }
  useEffect(() => {
    getThreads();
  }, []);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value, files } = e.target;
    if (files) {
      setForm({
        ...form,
        [name]: files[0],
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  }

  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleButtonClick() {
    fileInputRef.current?.click();
  }
  return { handleChange, handlePost, fileInputRef, handleButtonClick, thread };
}
