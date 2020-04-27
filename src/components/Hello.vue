<template>
  <div>
    {{features}}
    <!-- =={{count}} -->
    <ul>
      <li v-for="(feature, index) in features" :key="index">{{feature}}</li>
    </ul>

    <div>
      <input type="text" placeholder="输⼊入新特性" @keyup.enter="addFeature">
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Prop, Watch, Emit, Vue } from "vue-property-decorator";
 
import { State, Action, Mutation } from "vuex-class";

@Component
export default class Hello extends Vue {
  // 状态、动作、变更更映射
  @State features!: string[];
  @Action addFeatureAction: any;
  @Mutation private addFeatureMutation: any;
  // @Mutation addFeatureMutation;
  private addFeature(event: any) {
    console.log(event);
    // this.features.push(event.target.value);
    this.addFeatureAction(event.target.value);
    // this.addFeaturMutation(event.target.value);
    event.target.value = "";
  }
}
// // 定义⼀一个特性类，拥有更更多属性
// class Feature {
//   constructor(public id: number, public name: string) {}
// }
// // 可以对获取的数据类型做约束
// @Component
// export default class Hello extends Vue {
//   private features: Feature[];
//   constructor() {
//     super();
//     this.features = [
//       { id: 1, name: "类型注解" },
//       { id: 2, name: "编译型语⾔言" }
//     ];
//   }
// }

// class Feature {
//   constructor(
//     public id: number,
//     public name: string
//   ) {}
// }
// // 定义泛型接⼝口
// interface Result<T> {
//   ok: 0 | 1;
//   data: T[];
// }
// function getData<T>(): Promise<Result<T>> {
//   const data: any[] = [
//     { id: 1, name: "类型注解", version: "2.0" },
//     { id: 2, name: "编译型语⾔言", version: "1.0" }
//   ];
//   return Promise.resolve<Result<T>>({ ok: 1, data });
// }
// input组件
// @Component
// export default class Hello extends Vue {
//   // features: string[];
//   private features: Feature[];
//   constructor() {
//     super();
//     // this.features = ["类型注解", "编译型语⾔言"];
//     this.features = [
//       { id: 1, name: "类型注解" },
//       { id: 2, name: "编译型语⾔言" }
//     ];
//   }
   
//   get count() {
//     return this.features.length;
//   }
//   // ⽣生命周期钩⼦子
//   // created(){
//   //   console.log('created');
//   // }
   
//   async created() {
//     const result = await getData<Feature>();
//     this.features = result.data;
//   }

//   // // 普通⽅方法
//   // private addFeature(event: any) {
//   //   console.log(event);
//   //   this.features.push(event.target.value);
//   //   event.target.value = '';
//   // }
//   // 属性装饰器器
//   @Prop({ required: true, type: String }) private msg!: string;
//   // 函数装饰器器
//   @Watch("features", {deep: true})
//   onFeaturesChange(val: string, oldVal: any) {
//     console.log(val, oldVal);
//   }
//   // 函数装饰器器
//   @Emit('add')
//   private addFeature(event: any) {
//     const feature = {
//       name: event.target.value, id: this.features.length + 1, version: "1.0"
//     };
//     this.features.push(feature);
//     event.target.value = feature;
//     return event.target.value;
//   }
// }

// // 类装饰器器
// @Component
// export default class Hello extends Vue {
//   // 属性装饰器器
//   @Prop({ required: true, type: String }) private msg!: string;
//   // 函数装饰器器
//   @Watch("features", {deep: true})
//   onFeaturesChange(val: string, oldVal: any) {
//     console.log(val, oldVal);
//   }
//   // 函数装饰器器
//   @Emit('add')
//   private addFeature(event: any) {
//     const feature = {
//       name: event.target.value, id: this.features.length + 1, version: "1.0"
//     };
//     this.features.push(feature);
//     event.target.value = feature;
//     return event.target.value;
//   }
// }
</script>