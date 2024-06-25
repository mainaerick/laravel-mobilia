<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function customers_index()
    {
        $users = User::all();
        // dd($users);

        return inertia('Admin/Home/Users/Index', [
            "users" => $users,
        ]);
    }
    public function admins_index()
    {
        $users = User::all();

        return inertia('Admin/Home/Users/Index', [
            "users" => $users,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("Admin/Home/Users/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:' . User::class],
            'password' => ['required', 'confirmed', Password::defaults()],
        ]);


        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);
        $role = Role::updateOrCreate(['name' => 'User']);

        $permissions = Permission::pluck('id', 'id')->all();
        $role->syncPermissions($permissions);
        $user->assignRole([$role->id]);
        event(new Registered($user));
        return Redirect::route('admin.users.customers')->with('message', "User was created");
    }

    public function verify_user_email($id)
    {
        $user = User::findOrFail($id);
        if ($user->hasVerifiedEmail()) {
            return redirect()->back()->with('message', "Email verification sent");
        }
        $user->sendEmailVerificationNotification();

        return redirect()->back()->with('message', "Email verification sent");
    }
    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $user = User::findOrFail($id);
        return Inertia::render('Admin/Home/Users/Edit', [

            'user' => $user,
            'mustVerifyEmail' => $user instanceof MustVerifyEmail,
            'status' => session('status'),
            'roles' => Role::all(),
            'permissions' => Permission::all(),
            'userRoles' => $user->roles->pluck('name'),
            'userPermissions' => $user->permissions->pluck('name'),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);

        $user->fill($request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', Rule::unique(User::class)->ignore($user->id)],
        ]));

        if ($user->isDirty('email')) {
            $user->email_verified_at = null;
        }

        // 

        // $user->fill($request->validated());

        // if ($user->isDirty('email')) {
        //     $user->email_verified_at = null;
        // }

        $user->save();

        // Update roles and permissions
        if ($request->has('roles')) {
            $user->syncRoles($request->input('roles'));
        }

        if ($request->has('permissions')) {
            $user->syncPermissions($request->input('permissions'));
        }
        // $user->save();

        return redirect()->back()->with('message', "User was updated");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, $id)
    {
        // dd($request);
        $user = User::findOrFail($id);
        // dd($user);
        $user->delete();
        return Redirect::route('admin.users.customers')->with('message', "User was deleted");
    }
}
