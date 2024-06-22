/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Cart } from "./Cart";
import { CartCountArgs } from "./CartCountArgs";
import { CartFindManyArgs } from "./CartFindManyArgs";
import { CartFindUniqueArgs } from "./CartFindUniqueArgs";
import { CreateCartArgs } from "./CreateCartArgs";
import { UpdateCartArgs } from "./UpdateCartArgs";
import { DeleteCartArgs } from "./DeleteCartArgs";
import { ProductFindManyArgs } from "../../product/base/ProductFindManyArgs";
import { Product } from "../../product/base/Product";
import { User } from "../../user/base/User";
import { CartService } from "../cart.service";
@graphql.Resolver(() => Cart)
export class CartResolverBase {
  constructor(protected readonly service: CartService) {}

  async _cartsMeta(
    @graphql.Args() args: CartCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Cart])
  async carts(@graphql.Args() args: CartFindManyArgs): Promise<Cart[]> {
    return this.service.carts(args);
  }

  @graphql.Query(() => Cart, { nullable: true })
  async cart(@graphql.Args() args: CartFindUniqueArgs): Promise<Cart | null> {
    const result = await this.service.cart(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Cart)
  async createCart(@graphql.Args() args: CreateCartArgs): Promise<Cart> {
    return await this.service.createCart({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Cart)
  async updateCart(@graphql.Args() args: UpdateCartArgs): Promise<Cart | null> {
    try {
      return await this.service.updateCart({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Cart)
  async deleteCart(@graphql.Args() args: DeleteCartArgs): Promise<Cart | null> {
    try {
      return await this.service.deleteCart(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Product], { name: "products" })
  async findProducts(
    @graphql.Parent() parent: Cart,
    @graphql.Args() args: ProductFindManyArgs
  ): Promise<Product[]> {
    const results = await this.service.findProducts(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async getUser(@graphql.Parent() parent: Cart): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
