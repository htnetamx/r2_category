import mongoose from "mongoose";

export interface CategoryMongoDB extends mongoose.Document {
  Id: string;
  Name: string;
  SeoFilename: string;
  MimeType: string;
  CreatedOnUtc: Date;
  UpdatedOnUtc: Date;
}

export const CategorySchema: mongoose.Schema = new mongoose.Schema(
  {
    Id: String,
    Name: String,
    SeoFilename: String,
    MimeType: String,
    CreatedOnUtc: Date,
    UpdatedOnUtc: Date
    },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Category = mongoose.model<CategoryMongoDB>("Category", CategorySchema);
export { Category };
