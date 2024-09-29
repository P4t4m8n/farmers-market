import HomeCmp from "@/components/ui/Home/HomeCmp";
import { queryProducts } from "@/lib/actions/product.actions";
import { getCurrentSeason } from "@/lib/util/app.util";

export default async function Home() {
  const season = getCurrentSeason("northern");
  const seasonProducts = await queryProducts({ season });
  return <HomeCmp seasonProducts={seasonProducts} />;
}
