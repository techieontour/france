export default function UserProfile({ params }: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="flex flex-col items-start justify-start">Profile</h1>
      <hr />
      <p className="text-4xl">
        Profile Page{" "}
        <span className="p-1 ml-2 rounded bg-orange-500 text-black">
          {params.id}
        </span>
      </p>
    </div>
  );
}
