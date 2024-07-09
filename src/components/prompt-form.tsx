"use client"
import React, { useCallback, useContext, useEffect, useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Mic, Paperclip, Send } from "lucide-react";
import useSendMessage from "@/hooks/useSendMessage";
import { ChatContext } from '@/context/chat.context';

export function PromptForm() {
  const [mssg, setMssg] = useState('');
  const { setChatData } = useContext(ChatContext);
  const { data, mutate, isSuccess } = useSendMessage();

  const dataSetter = useCallback(() => {
    if (data) {
      setChatData(data);
    }
  }, [data]);

  useEffect(() => {
    if (isSuccess) {
      dataSetter();
    }
  }, [isSuccess]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    mutate({ 'question': mssg });
  }, [mutate, mssg]);

  const memoizedForm = useMemo(() => (
    <form className="absolute w-full space-x-2 left-0 bottom-0 bg-slate-950 rounded-b-md p-3 h-20 flex justify-between items-center">
      <fieldset className="w-full flex space-x-1 items-center">
        <Textarea
          className="resize-none border-0 p-5"
          placeholder="Chat with AI"
          autoFocus
          value={mssg}
          onChange={(e) => setMssg(e.target.value)}
        />
        <Button variant={"ghost"}>
          <Paperclip />
        </Button>
        <Button variant={"ghost"}>
          <Mic />
        </Button>
      </fieldset>
      <fieldset>
        <Button onClick={handleSubmit} className="w-20 bg-emerald-500 hover:bg-emerald-600 text-white">
          <Send />
        </Button>
      </fieldset>
    </form>
  ), [mssg, handleSubmit]);

  return memoizedForm;
}
