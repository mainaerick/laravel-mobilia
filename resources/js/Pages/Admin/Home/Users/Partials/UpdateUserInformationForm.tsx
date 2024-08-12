import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Link, useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { FormEventHandler } from "react";
import { PageProps } from "@/types";

export default function UpdateProfileInformation({
    user,
    roles,
    mustVerifyEmail,
    status,
    className = "",
}: {
    user: any;
    roles: [];
    mustVerifyEmail: boolean;
    status?: string;
    className?: string;
}) {
    // const user = usePage<PageProps>().props.auth.user;

    const { data, setData, put, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
            roles: user.roles,
        });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        put(route("admin.user.update", user.id));
    };
    console.log(user);

    return (
        <section className={className}>
            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>

                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-full"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        required
                        autoComplete="username"
                    />

                    <InputError className="mt-2" message={errors.email} />
                </div>
                <div>
                    <label
                        htmlFor="roles"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Roles
                    </label>
                    <select
                        id="roles"
                        multiple
                        className="mt-1 block w-full"
                        value={user.roles[0]}
                        onChange={(e) =>
                            setData(
                                "roles",
                                Array.from(
                                    e.target.selectedOptions,
                                    (option) => option.value,
                                ),
                            )
                        }
                    >
                        {roles.map((role: any) => (
                            <option key={role.id} value={role.name}>
                                {role.name}
                            </option>
                        ))}
                    </select>
                    {errors.roles && (
                        <div className="mt-2 text-sm text-red-600">
                            {errors.roles}
                        </div>
                    )}
                </div>
                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="text-sm mt-2 text-gray-800 dark:text-gray-200">
                            This email address is unverified.
                            <Link
                                href={route("admin.verification.send", user.id)}
                                method="post"
                                as="button"
                                className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === "verification-link-sent" && (
                            <div className="mt-2 font-medium text-sm text-green-600 dark:text-green-400">
                                A new verification link has been sent to your
                                email address.
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Saved.
                        </p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
