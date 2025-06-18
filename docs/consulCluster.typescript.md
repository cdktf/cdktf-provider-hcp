# `consulCluster` Submodule <a name="`consulCluster` Submodule" id="@cdktf/provider-hcp.consulCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConsulCluster <a name="ConsulCluster" id="@cdktf/provider-hcp.consulCluster.ConsulCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/consul_cluster hcp_consul_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer"></a>

```typescript
import { consulCluster } from '@cdktf/provider-hcp'

new consulCluster.ConsulCluster(scope: Construct, id: string, config: ConsulClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig">ConsulClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig">ConsulClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.putIpAllowlist">putIpAllowlist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.resetAutoHvnToHvnPeering">resetAutoHvnToHvnPeering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.resetConnectEnabled">resetConnectEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.resetDatacenter">resetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.resetIpAllowlist">resetIpAllowlist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.resetMinConsulVersion">resetMinConsulVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.resetPrimaryLink">resetPrimaryLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.resetPublicEndpoint">resetPublicEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.resetSize">resetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIpAllowlist` <a name="putIpAllowlist" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.putIpAllowlist"></a>

```typescript
public putIpAllowlist(value: IResolvable | ConsulClusterIpAllowlistStruct[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.putIpAllowlist.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStruct">ConsulClusterIpAllowlistStruct</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.putTimeouts"></a>

```typescript
public putTimeouts(value: ConsulClusterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts">ConsulClusterTimeouts</a>

---

##### `resetAutoHvnToHvnPeering` <a name="resetAutoHvnToHvnPeering" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.resetAutoHvnToHvnPeering"></a>

```typescript
public resetAutoHvnToHvnPeering(): void
```

##### `resetConnectEnabled` <a name="resetConnectEnabled" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.resetConnectEnabled"></a>

```typescript
public resetConnectEnabled(): void
```

##### `resetDatacenter` <a name="resetDatacenter" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.resetDatacenter"></a>

```typescript
public resetDatacenter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpAllowlist` <a name="resetIpAllowlist" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.resetIpAllowlist"></a>

```typescript
public resetIpAllowlist(): void
```

##### `resetMinConsulVersion` <a name="resetMinConsulVersion" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.resetMinConsulVersion"></a>

```typescript
public resetMinConsulVersion(): void
```

##### `resetPrimaryLink` <a name="resetPrimaryLink" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.resetPrimaryLink"></a>

```typescript
public resetPrimaryLink(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetPublicEndpoint` <a name="resetPublicEndpoint" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.resetPublicEndpoint"></a>

```typescript
public resetPublicEndpoint(): void
```

##### `resetSize` <a name="resetSize" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.resetSize"></a>

```typescript
public resetSize(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ConsulCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.isConstruct"></a>

```typescript
import { consulCluster } from '@cdktf/provider-hcp'

consulCluster.ConsulCluster.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.isTerraformElement"></a>

```typescript
import { consulCluster } from '@cdktf/provider-hcp'

consulCluster.ConsulCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.isTerraformResource"></a>

```typescript
import { consulCluster } from '@cdktf/provider-hcp'

consulCluster.ConsulCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.generateConfigForImport"></a>

```typescript
import { consulCluster } from '@cdktf/provider-hcp'

consulCluster.ConsulCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ConsulCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConsulCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConsulCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/consul_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ConsulCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.cloudProvider">cloudProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulAutomaticUpgrades">consulAutomaticUpgrades</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulCaFile">consulCaFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulConfigFile">consulConfigFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulPrivateEndpointUrl">consulPrivateEndpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulPublicEndpointUrl">consulPublicEndpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulRootTokenAccessorId">consulRootTokenAccessorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulRootTokenSecretId">consulRootTokenSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulSnapshotInterval">consulSnapshotInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulSnapshotRetention">consulSnapshotRetention</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulVersion">consulVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.ipAllowlist">ipAllowlist</a></code> | <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList">ConsulClusterIpAllowlistStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.organizationId">organizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.scale">scale</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference">ConsulClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.autoHvnToHvnPeeringInput">autoHvnToHvnPeeringInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.connectEnabledInput">connectEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.datacenterInput">datacenterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.hvnIdInput">hvnIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.ipAllowlistInput">ipAllowlistInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStruct">ConsulClusterIpAllowlistStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.minConsulVersionInput">minConsulVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.primaryLinkInput">primaryLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.publicEndpointInput">publicEndpointInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.sizeInput">sizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.tierInput">tierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts">ConsulClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.autoHvnToHvnPeering">autoHvnToHvnPeering</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.connectEnabled">connectEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.datacenter">datacenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.hvnId">hvnId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.minConsulVersion">minConsulVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.primaryLink">primaryLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.publicEndpoint">publicEndpoint</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.size">size</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.tier">tier</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cloudProvider`<sup>Required</sup> <a name="cloudProvider" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.cloudProvider"></a>

```typescript
public readonly cloudProvider: string;
```

- *Type:* string

---

##### `consulAutomaticUpgrades`<sup>Required</sup> <a name="consulAutomaticUpgrades" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulAutomaticUpgrades"></a>

```typescript
public readonly consulAutomaticUpgrades: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `consulCaFile`<sup>Required</sup> <a name="consulCaFile" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulCaFile"></a>

```typescript
public readonly consulCaFile: string;
```

- *Type:* string

---

##### `consulConfigFile`<sup>Required</sup> <a name="consulConfigFile" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulConfigFile"></a>

```typescript
public readonly consulConfigFile: string;
```

- *Type:* string

---

##### `consulPrivateEndpointUrl`<sup>Required</sup> <a name="consulPrivateEndpointUrl" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulPrivateEndpointUrl"></a>

```typescript
public readonly consulPrivateEndpointUrl: string;
```

- *Type:* string

---

##### `consulPublicEndpointUrl`<sup>Required</sup> <a name="consulPublicEndpointUrl" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulPublicEndpointUrl"></a>

```typescript
public readonly consulPublicEndpointUrl: string;
```

- *Type:* string

---

##### `consulRootTokenAccessorId`<sup>Required</sup> <a name="consulRootTokenAccessorId" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulRootTokenAccessorId"></a>

```typescript
public readonly consulRootTokenAccessorId: string;
```

- *Type:* string

---

##### `consulRootTokenSecretId`<sup>Required</sup> <a name="consulRootTokenSecretId" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulRootTokenSecretId"></a>

```typescript
public readonly consulRootTokenSecretId: string;
```

- *Type:* string

---

##### `consulSnapshotInterval`<sup>Required</sup> <a name="consulSnapshotInterval" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulSnapshotInterval"></a>

```typescript
public readonly consulSnapshotInterval: string;
```

- *Type:* string

---

##### `consulSnapshotRetention`<sup>Required</sup> <a name="consulSnapshotRetention" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulSnapshotRetention"></a>

```typescript
public readonly consulSnapshotRetention: string;
```

- *Type:* string

---

##### `consulVersion`<sup>Required</sup> <a name="consulVersion" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulVersion"></a>

```typescript
public readonly consulVersion: string;
```

- *Type:* string

---

##### `ipAllowlist`<sup>Required</sup> <a name="ipAllowlist" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.ipAllowlist"></a>

```typescript
public readonly ipAllowlist: ConsulClusterIpAllowlistStructList;
```

- *Type:* <a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList">ConsulClusterIpAllowlistStructList</a>

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `scale`<sup>Required</sup> <a name="scale" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.scale"></a>

```typescript
public readonly scale: number;
```

- *Type:* number

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.timeouts"></a>

```typescript
public readonly timeouts: ConsulClusterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference">ConsulClusterTimeoutsOutputReference</a>

---

##### `autoHvnToHvnPeeringInput`<sup>Optional</sup> <a name="autoHvnToHvnPeeringInput" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.autoHvnToHvnPeeringInput"></a>

```typescript
public readonly autoHvnToHvnPeeringInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `connectEnabledInput`<sup>Optional</sup> <a name="connectEnabledInput" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.connectEnabledInput"></a>

```typescript
public readonly connectEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `datacenterInput`<sup>Optional</sup> <a name="datacenterInput" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.datacenterInput"></a>

```typescript
public readonly datacenterInput: string;
```

- *Type:* string

---

##### `hvnIdInput`<sup>Optional</sup> <a name="hvnIdInput" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.hvnIdInput"></a>

```typescript
public readonly hvnIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipAllowlistInput`<sup>Optional</sup> <a name="ipAllowlistInput" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.ipAllowlistInput"></a>

```typescript
public readonly ipAllowlistInput: IResolvable | ConsulClusterIpAllowlistStruct[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStruct">ConsulClusterIpAllowlistStruct</a>[]

---

##### `minConsulVersionInput`<sup>Optional</sup> <a name="minConsulVersionInput" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.minConsulVersionInput"></a>

```typescript
public readonly minConsulVersionInput: string;
```

- *Type:* string

---

##### `primaryLinkInput`<sup>Optional</sup> <a name="primaryLinkInput" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.primaryLinkInput"></a>

```typescript
public readonly primaryLinkInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `publicEndpointInput`<sup>Optional</sup> <a name="publicEndpointInput" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.publicEndpointInput"></a>

```typescript
public readonly publicEndpointInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.sizeInput"></a>

```typescript
public readonly sizeInput: string;
```

- *Type:* string

---

##### `tierInput`<sup>Optional</sup> <a name="tierInput" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.tierInput"></a>

```typescript
public readonly tierInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ConsulClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts">ConsulClusterTimeouts</a>

---

##### `autoHvnToHvnPeering`<sup>Required</sup> <a name="autoHvnToHvnPeering" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.autoHvnToHvnPeering"></a>

```typescript
public readonly autoHvnToHvnPeering: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `connectEnabled`<sup>Required</sup> <a name="connectEnabled" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.connectEnabled"></a>

```typescript
public readonly connectEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.datacenter"></a>

```typescript
public readonly datacenter: string;
```

- *Type:* string

---

##### `hvnId`<sup>Required</sup> <a name="hvnId" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.hvnId"></a>

```typescript
public readonly hvnId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `minConsulVersion`<sup>Required</sup> <a name="minConsulVersion" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.minConsulVersion"></a>

```typescript
public readonly minConsulVersion: string;
```

- *Type:* string

---

##### `primaryLink`<sup>Required</sup> <a name="primaryLink" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.primaryLink"></a>

```typescript
public readonly primaryLink: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `publicEndpoint`<sup>Required</sup> <a name="publicEndpoint" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.publicEndpoint"></a>

```typescript
public readonly publicEndpoint: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.size"></a>

```typescript
public readonly size: string;
```

- *Type:* string

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConsulClusterConfig <a name="ConsulClusterConfig" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.Initializer"></a>

```typescript
import { consulCluster } from '@cdktf/provider-hcp'

const consulClusterConfig: consulCluster.ConsulClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.clusterId">clusterId</a></code> | <code>string</code> | The ID of the HCP Consul cluster. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.hvnId">hvnId</a></code> | <code>string</code> | The ID of the HVN this HCP Consul cluster is associated to. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.tier">tier</a></code> | <code>string</code> | The tier that the HCP Consul cluster will be provisioned as. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.autoHvnToHvnPeering">autoHvnToHvnPeering</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enables automatic HVN to HVN peering when creating a secondary cluster in a federation. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.connectEnabled">connectEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Denotes the Consul connect feature should be enabled for this cluster.  Default to true. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.datacenter">datacenter</a></code> | <code>string</code> | The Consul data center name of the cluster. If not specified, it is defaulted to the value of `cluster_id`. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/consul_cluster#id ConsulCluster#id}. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.ipAllowlist">ipAllowlist</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStruct">ConsulClusterIpAllowlistStruct</a>[]</code> | ip_allowlist block. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.minConsulVersion">minConsulVersion</a></code> | <code>string</code> | The minimum Consul patch version of the cluster. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.primaryLink">primaryLink</a></code> | <code>string</code> | The `self_link` of the HCP Consul cluster which is the primary in the federation setup with this HCP Consul cluster. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.projectId">projectId</a></code> | <code>string</code> | The ID of the HCP project where the HCP Consul cluster is located. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.publicEndpoint">publicEndpoint</a></code> | <code>boolean \| cdktf.IResolvable</code> | Denotes that the cluster has a public endpoint for the Consul UI. Defaults to false. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.size">size</a></code> | <code>string</code> | The t-shirt size representation of each server VM that this Consul cluster is provisioned with. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts">ConsulClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

The ID of the HCP Consul cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/consul_cluster#cluster_id ConsulCluster#cluster_id}

---

##### `hvnId`<sup>Required</sup> <a name="hvnId" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.hvnId"></a>

```typescript
public readonly hvnId: string;
```

- *Type:* string

The ID of the HVN this HCP Consul cluster is associated to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/consul_cluster#hvn_id ConsulCluster#hvn_id}

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string

The tier that the HCP Consul cluster will be provisioned as.

Only `development`, `standard`, `plus`, and `premium` are available at this time. See [pricing information](https://www.hashicorp.com/products/consul/pricing).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/consul_cluster#tier ConsulCluster#tier}

---

##### `autoHvnToHvnPeering`<sup>Optional</sup> <a name="autoHvnToHvnPeering" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.autoHvnToHvnPeering"></a>

```typescript
public readonly autoHvnToHvnPeering: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enables automatic HVN to HVN peering when creating a secondary cluster in a federation.

The alternative to using the auto-accept feature is to create an [`hcp_hvn_peering_connection`](hvn_peering_connection.md) resource that explicitly defines the HVN resources that are allowed to communicate with each other.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/consul_cluster#auto_hvn_to_hvn_peering ConsulCluster#auto_hvn_to_hvn_peering}

---

##### `connectEnabled`<sup>Optional</sup> <a name="connectEnabled" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.connectEnabled"></a>

```typescript
public readonly connectEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Denotes the Consul connect feature should be enabled for this cluster.  Default to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/consul_cluster#connect_enabled ConsulCluster#connect_enabled}

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.datacenter"></a>

```typescript
public readonly datacenter: string;
```

- *Type:* string

The Consul data center name of the cluster. If not specified, it is defaulted to the value of `cluster_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/consul_cluster#datacenter ConsulCluster#datacenter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/consul_cluster#id ConsulCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipAllowlist`<sup>Optional</sup> <a name="ipAllowlist" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.ipAllowlist"></a>

```typescript
public readonly ipAllowlist: IResolvable | ConsulClusterIpAllowlistStruct[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStruct">ConsulClusterIpAllowlistStruct</a>[]

ip_allowlist block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/consul_cluster#ip_allowlist ConsulCluster#ip_allowlist}

---

##### `minConsulVersion`<sup>Optional</sup> <a name="minConsulVersion" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.minConsulVersion"></a>

```typescript
public readonly minConsulVersion: string;
```

- *Type:* string

The minimum Consul patch version of the cluster.

Allows only the rightmost version component to increment (E.g: `1.13.0` will allow installation of `1.13.2` and `1.13.3` etc., but not `1.14.0`). If not specified, it is defaulted to the version that is currently recommended by HCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/consul_cluster#min_consul_version ConsulCluster#min_consul_version}

---

##### `primaryLink`<sup>Optional</sup> <a name="primaryLink" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.primaryLink"></a>

```typescript
public readonly primaryLink: string;
```

- *Type:* string

The `self_link` of the HCP Consul cluster which is the primary in the federation setup with this HCP Consul cluster.

If not specified, it is a standalone cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/consul_cluster#primary_link ConsulCluster#primary_link}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The ID of the HCP project where the HCP Consul cluster is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.
If a project is not configured in the HCP Provider config block, the oldest project in the organization will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/consul_cluster#project_id ConsulCluster#project_id}

---

##### `publicEndpoint`<sup>Optional</sup> <a name="publicEndpoint" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.publicEndpoint"></a>

```typescript
public readonly publicEndpoint: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Denotes that the cluster has a public endpoint for the Consul UI. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/consul_cluster#public_endpoint ConsulCluster#public_endpoint}

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.size"></a>

```typescript
public readonly size: string;
```

- *Type:* string

The t-shirt size representation of each server VM that this Consul cluster is provisioned with.

Valid option for development tier - `x_small`. Valid options for other tiers - `small`, `medium`, `large`. For more details - https://cloud.hashicorp.com/pricing/consul. Upgrading the size of a cluster after creation is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/consul_cluster#size ConsulCluster#size}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ConsulClusterTimeouts;
```

- *Type:* <a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts">ConsulClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/consul_cluster#timeouts ConsulCluster#timeouts}

---

### ConsulClusterIpAllowlistStruct <a name="ConsulClusterIpAllowlistStruct" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStruct.Initializer"></a>

```typescript
import { consulCluster } from '@cdktf/provider-hcp'

const consulClusterIpAllowlistStruct: consulCluster.ConsulClusterIpAllowlistStruct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStruct.property.address">address</a></code> | <code>string</code> | IP address range in CIDR notation. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStruct.property.description">description</a></code> | <code>string</code> | Description to help identify source (maximum 255 chars). |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStruct.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

IP address range in CIDR notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/consul_cluster#address ConsulCluster#address}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStruct.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description to help identify source (maximum 255 chars).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/consul_cluster#description ConsulCluster#description}

---

### ConsulClusterTimeouts <a name="ConsulClusterTimeouts" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts.Initializer"></a>

```typescript
import { consulCluster } from '@cdktf/provider-hcp'

const consulClusterTimeouts: consulCluster.ConsulClusterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/consul_cluster#create ConsulCluster#create}. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts.property.default">default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/consul_cluster#default ConsulCluster#default}. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/consul_cluster#delete ConsulCluster#delete}. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/consul_cluster#update ConsulCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/consul_cluster#create ConsulCluster#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/consul_cluster#default ConsulCluster#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/consul_cluster#delete ConsulCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/consul_cluster#update ConsulCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConsulClusterIpAllowlistStructList <a name="ConsulClusterIpAllowlistStructList" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.Initializer"></a>

```typescript
import { consulCluster } from '@cdktf/provider-hcp'

new consulCluster.ConsulClusterIpAllowlistStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.get"></a>

```typescript
public get(index: number): ConsulClusterIpAllowlistStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStruct">ConsulClusterIpAllowlistStruct</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConsulClusterIpAllowlistStruct[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStruct">ConsulClusterIpAllowlistStruct</a>[]

---


### ConsulClusterIpAllowlistStructOutputReference <a name="ConsulClusterIpAllowlistStructOutputReference" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.Initializer"></a>

```typescript
import { consulCluster } from '@cdktf/provider-hcp'

new consulCluster.ConsulClusterIpAllowlistStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.property.addressInput">addressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStruct">ConsulClusterIpAllowlistStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConsulClusterIpAllowlistStruct;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStruct">ConsulClusterIpAllowlistStruct</a>

---


### ConsulClusterTimeoutsOutputReference <a name="ConsulClusterTimeoutsOutputReference" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.Initializer"></a>

```typescript
import { consulCluster } from '@cdktf/provider-hcp'

new consulCluster.ConsulClusterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts">ConsulClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConsulClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts">ConsulClusterTimeouts</a>

---



