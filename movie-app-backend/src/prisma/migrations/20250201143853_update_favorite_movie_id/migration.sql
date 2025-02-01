-- DropForeignKey
ALTER TABLE "Favorite" DROP CONSTRAINT "Favorite_movieId_fkey";

-- AlterTable
ALTER TABLE "Favorite" ALTER COLUMN "movieId" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("imdbID") ON DELETE RESTRICT ON UPDATE CASCADE;
