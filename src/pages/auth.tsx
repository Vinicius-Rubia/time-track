import { ModeToggle } from "@/components/mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { activateLoader, deactivateLoader } from "@/redux/loaderSlice";
import { Input } from "@/shared/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { AtSign, KeyRound } from "lucide-react";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import Profile from "../assets/images/profile.png";

const formSchema = z.object({
  email: z.string().email("Informe um e-mail válido"),
  password: z
    .string()
    .min(4, "Informe uma senha maior que 4 dígitos")
    .max(8, "Infrome uma senha meno que 8 dígitos"),
});

type FormSchemaType = z.infer<typeof formSchema>;

export const Auth: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    console.log(data);
    dispatch(activateLoader("Autenticando. Aguarde"));
    setTimeout(() => {
      toast({
        title: "Login",
        description: "Autenticando com sucesso!",
      });
      dispatch(deactivateLoader());
      navigate("/home");
    }, 2000);
  };

  return (
    <div className="bg-auth h-screen relative bg-no-repeat bg-cover bg-center bg-black">
      <div className="absolute top-[50px] right-[70px] z-10">
        <ModeToggle />
      </div>
      <div className="bg-primary/10 h-full text-white relative">
        <h2 className="text-accent font-bold text-xl absolute top-[50px] left-[70px]">
          TimeTrack
        </h2>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col w-[300px] justify-center mx-auto h-full"
          >
            <Avatar className="w-[300px] h-[300px] mb-10 border border-accent/50">
              <AvatarImage src={Profile} alt="Profile" />
              <AvatarFallback>AP</AvatarFallback>
            </Avatar>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mb-2">
                  <FormControl>
                    <Input
                      className="bg-black/50"
                      type="email"
                      Icon={AtSign}
                      placeholder="E-mail"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-white/50 dark:text-white/50" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="mb-2">
                  <FormControl>
                    <Input
                      className="bg-white/5"
                      type="password"
                      Icon={KeyRound}
                      placeholder="Senha"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-white/50 dark:text-white/50" />
                </FormItem>
              )}
            />
            <Link
              to="/esqueci-minha-senha"
              className="hover:underline text-primary pb-3 pt-2 text-sm"
            >
              Esqueceu a senha?
            </Link>
            <Button type="submit">Entrar</Button>
          </form>
        </Form>

        <Link
          to="/criar-conta"
          className="absolute text-primary hover:text-accent transition-colors font-bold bottom-[50px] right-[70px]"
        >
          Criar conta
        </Link>
      </div>
    </div>
  );
};
