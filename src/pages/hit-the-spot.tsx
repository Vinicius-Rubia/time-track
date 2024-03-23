import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { activateLoader, deactivateLoader } from "@/redux/loaderSlice";
import { Input } from "@/shared/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Clock } from "lucide-react";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

function isHourMinuteString(val: string) {
  const regex = /^(?:2[0-3]|[01][0-9]):[0-5][0-9]$/;
  return regex.test(val);
}

const formSchema = z.object({
  hour: z.string().refine((val) => isHourMinuteString(val), {
    message: "A hora deve estar no formato HH:MM",
  }),
  justification: z
    .string()
    .min(1, "Informe uma justificativa")
    .max(100, "Justificative precisar ser menos que 100 caracteres"),
  type: z.enum(["entry", "exit"], {
    required_error: "Escolha ao menos uma opção",
  }),
});

type FormSchemaType = z.infer<typeof formSchema>;

export const HitTheSpot: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      hour: "",
      justification: "Marcação de ponto",
      type: "entry",
    },
  });

  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    console.log(data);
    dispatch(activateLoader("Inserindo batida. Aguarde"));
    setTimeout(() => {
      toast({
        title: "Batida",
        description: "Inserida com sucesso!",
      });
      dispatch(deactivateLoader());
      navigate("/espelho-de-ponto");
    }, 2000);
  };

  return (
    <main className="px-7">
      <div className="flex items-center gap-4">
        <h3 className="font-bold text-white">Período:</h3>
        <p className="bg-primary-aux-accent text-sm text-white/75 px-2 h-[30px] rounded flex items-center">
          16/03/2024 - 15/04/2024
        </p>
      </div>

      <h2 className="font-semibold text-xl text-primary mt-7 mb-3">
        Incluir batida
      </h2>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 text-white/75"
        >
          <div className="flex items-center relative gap-16">
            <FormField
              control={form.control}
              name="hour"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hora</FormLabel>
                  <FormControl>
                    <Input
                      className="w-[440px]"
                      Icon={Clock}
                      placeholder="00:00"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem className="mt-auto mb-2">
                  <FormControl className="flex absolute top-9">
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="gap-12"
                    >
                      <FormItem className="flex items-center space-x-2 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="entry" />
                        </FormControl>
                        <FormLabel className="font-normal">Entrada</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="exit" />
                        </FormControl>
                        <FormLabel className="font-normal">Saída</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="justification"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Justificativa</FormLabel>
                <FormControl>
                  <Textarea className="resize-none" rows={5} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Confirmar</Button>
        </form>
      </Form>
    </main>
  );
};
