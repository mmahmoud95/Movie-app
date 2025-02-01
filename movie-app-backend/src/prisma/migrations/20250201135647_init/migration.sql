-- CreateTable
CREATE TABLE "Movie" (
    "id" SERIAL NOT NULL,
    "imdbID" TEXT NOT NULL,
    "Title" TEXT NOT NULL,
    "Year" TEXT NOT NULL,
    "Poster" TEXT NOT NULL,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Movie_imdbID_key" ON "Movie"("imdbID");
