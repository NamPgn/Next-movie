import CategoryContents from "../Category/Content/Category";

export default function RecentlyUpdated({ data }: any) {

  return (
    <section>
      <h2 className="text-orange-500 text-xl font-bold mb-4">MỚI CẬP NHẬT</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data &&
          data.map((item: any, index: number) => {
            return (
              <CategoryContents
                time={item.time}
                title={item.name}
                image={item.linkImg}
                link={"/q/" + item._id}
                products={item.product}
                typecm={item.typecm}
                text={item.text}
                sumSeri={item.sumSeri}
                year={item.year}
              />
            );
          })}
      </div>
    </section>
  );
}
