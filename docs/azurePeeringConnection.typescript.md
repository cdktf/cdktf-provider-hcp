# `azurePeeringConnection` Submodule <a name="`azurePeeringConnection` Submodule" id="@cdktf/provider-hcp.azurePeeringConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AzurePeeringConnection <a name="AzurePeeringConnection" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/azure_peering_connection hcp_azure_peering_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer"></a>

```typescript
import { azurePeeringConnection } from '@cdktf/provider-hcp'

new azurePeeringConnection.AzurePeeringConnection(scope: Construct, id: string, config: AzurePeeringConnectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig">AzurePeeringConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig">AzurePeeringConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.resetAllowForwardedTraffic">resetAllowForwardedTraffic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.resetUseRemoteGateways">resetUseRemoteGateways</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.putTimeouts"></a>

```typescript
public putTimeouts(value: AzurePeeringConnectionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeouts">AzurePeeringConnectionTimeouts</a>

---

##### `resetAllowForwardedTraffic` <a name="resetAllowForwardedTraffic" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.resetAllowForwardedTraffic"></a>

```typescript
public resetAllowForwardedTraffic(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUseRemoteGateways` <a name="resetUseRemoteGateways" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.resetUseRemoteGateways"></a>

```typescript
public resetUseRemoteGateways(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AzurePeeringConnection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.isConstruct"></a>

```typescript
import { azurePeeringConnection } from '@cdktf/provider-hcp'

azurePeeringConnection.AzurePeeringConnection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.isTerraformElement"></a>

```typescript
import { azurePeeringConnection } from '@cdktf/provider-hcp'

azurePeeringConnection.AzurePeeringConnection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.isTerraformResource"></a>

```typescript
import { azurePeeringConnection } from '@cdktf/provider-hcp'

azurePeeringConnection.AzurePeeringConnection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.generateConfigForImport"></a>

```typescript
import { azurePeeringConnection } from '@cdktf/provider-hcp'

azurePeeringConnection.AzurePeeringConnection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AzurePeeringConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AzurePeeringConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AzurePeeringConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/azure_peering_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AzurePeeringConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.azurePeeringId">azurePeeringId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.expiresAt">expiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.organizationId">organizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference">AzurePeeringConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.allowForwardedTrafficInput">allowForwardedTrafficInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.hvnLinkInput">hvnLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peeringIdInput">peeringIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peerResourceGroupNameInput">peerResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peerSubscriptionIdInput">peerSubscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peerTenantIdInput">peerTenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peerVnetNameInput">peerVnetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peerVnetRegionInput">peerVnetRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeouts">AzurePeeringConnectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.useRemoteGatewaysInput">useRemoteGatewaysInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.allowForwardedTraffic">allowForwardedTraffic</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.hvnLink">hvnLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peeringId">peeringId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peerResourceGroupName">peerResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peerSubscriptionId">peerSubscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peerTenantId">peerTenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peerVnetName">peerVnetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peerVnetRegion">peerVnetRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.useRemoteGateways">useRemoteGateways</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `azurePeeringId`<sup>Required</sup> <a name="azurePeeringId" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.azurePeeringId"></a>

```typescript
public readonly azurePeeringId: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.expiresAt"></a>

```typescript
public readonly expiresAt: string;
```

- *Type:* string

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.timeouts"></a>

```typescript
public readonly timeouts: AzurePeeringConnectionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference">AzurePeeringConnectionTimeoutsOutputReference</a>

---

##### `allowForwardedTrafficInput`<sup>Optional</sup> <a name="allowForwardedTrafficInput" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.allowForwardedTrafficInput"></a>

```typescript
public readonly allowForwardedTrafficInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hvnLinkInput`<sup>Optional</sup> <a name="hvnLinkInput" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.hvnLinkInput"></a>

```typescript
public readonly hvnLinkInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `peeringIdInput`<sup>Optional</sup> <a name="peeringIdInput" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peeringIdInput"></a>

```typescript
public readonly peeringIdInput: string;
```

- *Type:* string

---

##### `peerResourceGroupNameInput`<sup>Optional</sup> <a name="peerResourceGroupNameInput" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peerResourceGroupNameInput"></a>

```typescript
public readonly peerResourceGroupNameInput: string;
```

- *Type:* string

---

##### `peerSubscriptionIdInput`<sup>Optional</sup> <a name="peerSubscriptionIdInput" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peerSubscriptionIdInput"></a>

```typescript
public readonly peerSubscriptionIdInput: string;
```

- *Type:* string

---

##### `peerTenantIdInput`<sup>Optional</sup> <a name="peerTenantIdInput" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peerTenantIdInput"></a>

```typescript
public readonly peerTenantIdInput: string;
```

- *Type:* string

---

##### `peerVnetNameInput`<sup>Optional</sup> <a name="peerVnetNameInput" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peerVnetNameInput"></a>

```typescript
public readonly peerVnetNameInput: string;
```

- *Type:* string

---

##### `peerVnetRegionInput`<sup>Optional</sup> <a name="peerVnetRegionInput" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peerVnetRegionInput"></a>

```typescript
public readonly peerVnetRegionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AzurePeeringConnectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeouts">AzurePeeringConnectionTimeouts</a>

---

##### `useRemoteGatewaysInput`<sup>Optional</sup> <a name="useRemoteGatewaysInput" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.useRemoteGatewaysInput"></a>

```typescript
public readonly useRemoteGatewaysInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowForwardedTraffic`<sup>Required</sup> <a name="allowForwardedTraffic" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.allowForwardedTraffic"></a>

```typescript
public readonly allowForwardedTraffic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hvnLink`<sup>Required</sup> <a name="hvnLink" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.hvnLink"></a>

```typescript
public readonly hvnLink: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `peeringId`<sup>Required</sup> <a name="peeringId" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peeringId"></a>

```typescript
public readonly peeringId: string;
```

- *Type:* string

---

##### `peerResourceGroupName`<sup>Required</sup> <a name="peerResourceGroupName" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peerResourceGroupName"></a>

```typescript
public readonly peerResourceGroupName: string;
```

- *Type:* string

---

##### `peerSubscriptionId`<sup>Required</sup> <a name="peerSubscriptionId" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peerSubscriptionId"></a>

```typescript
public readonly peerSubscriptionId: string;
```

- *Type:* string

---

##### `peerTenantId`<sup>Required</sup> <a name="peerTenantId" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peerTenantId"></a>

```typescript
public readonly peerTenantId: string;
```

- *Type:* string

---

##### `peerVnetName`<sup>Required</sup> <a name="peerVnetName" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peerVnetName"></a>

```typescript
public readonly peerVnetName: string;
```

- *Type:* string

---

##### `peerVnetRegion`<sup>Required</sup> <a name="peerVnetRegion" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peerVnetRegion"></a>

```typescript
public readonly peerVnetRegion: string;
```

- *Type:* string

---

##### `useRemoteGateways`<sup>Required</sup> <a name="useRemoteGateways" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.useRemoteGateways"></a>

```typescript
public readonly useRemoteGateways: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AzurePeeringConnectionConfig <a name="AzurePeeringConnectionConfig" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.Initializer"></a>

```typescript
import { azurePeeringConnection } from '@cdktf/provider-hcp'

const azurePeeringConnectionConfig: azurePeeringConnection.AzurePeeringConnectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.hvnLink">hvnLink</a></code> | <code>string</code> | The `self_link` of the HashiCorp Virtual Network (HVN). |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.peeringId">peeringId</a></code> | <code>string</code> | The ID of the peering connection. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.peerResourceGroupName">peerResourceGroupName</a></code> | <code>string</code> | The resource group name of the peer VNet in Azure. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.peerSubscriptionId">peerSubscriptionId</a></code> | <code>string</code> | The subscription ID of the peer VNet in Azure. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.peerTenantId">peerTenantId</a></code> | <code>string</code> | The tenant ID of the peer VNet in Azure. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.peerVnetName">peerVnetName</a></code> | <code>string</code> | The name of the peer VNet in Azure. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.peerVnetRegion">peerVnetRegion</a></code> | <code>string</code> | The region of the peer VNet in Azure. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.allowForwardedTraffic">allowForwardedTraffic</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the forwarded traffic originating from the peered VNet is allowed in the HVN. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/azure_peering_connection#id AzurePeeringConnection#id}. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeouts">AzurePeeringConnectionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.useRemoteGateways">useRemoteGateways</a></code> | <code>boolean \| cdktf.IResolvable</code> | If the HVN should use the gateway of the peered VNet. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `hvnLink`<sup>Required</sup> <a name="hvnLink" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.hvnLink"></a>

```typescript
public readonly hvnLink: string;
```

- *Type:* string

The `self_link` of the HashiCorp Virtual Network (HVN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/azure_peering_connection#hvn_link AzurePeeringConnection#hvn_link}

---

##### `peeringId`<sup>Required</sup> <a name="peeringId" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.peeringId"></a>

```typescript
public readonly peeringId: string;
```

- *Type:* string

The ID of the peering connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/azure_peering_connection#peering_id AzurePeeringConnection#peering_id}

---

##### `peerResourceGroupName`<sup>Required</sup> <a name="peerResourceGroupName" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.peerResourceGroupName"></a>

```typescript
public readonly peerResourceGroupName: string;
```

- *Type:* string

The resource group name of the peer VNet in Azure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/azure_peering_connection#peer_resource_group_name AzurePeeringConnection#peer_resource_group_name}

---

##### `peerSubscriptionId`<sup>Required</sup> <a name="peerSubscriptionId" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.peerSubscriptionId"></a>

```typescript
public readonly peerSubscriptionId: string;
```

- *Type:* string

The subscription ID of the peer VNet in Azure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/azure_peering_connection#peer_subscription_id AzurePeeringConnection#peer_subscription_id}

---

##### `peerTenantId`<sup>Required</sup> <a name="peerTenantId" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.peerTenantId"></a>

```typescript
public readonly peerTenantId: string;
```

- *Type:* string

The tenant ID of the peer VNet in Azure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/azure_peering_connection#peer_tenant_id AzurePeeringConnection#peer_tenant_id}

---

##### `peerVnetName`<sup>Required</sup> <a name="peerVnetName" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.peerVnetName"></a>

```typescript
public readonly peerVnetName: string;
```

- *Type:* string

The name of the peer VNet in Azure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/azure_peering_connection#peer_vnet_name AzurePeeringConnection#peer_vnet_name}

---

##### `peerVnetRegion`<sup>Required</sup> <a name="peerVnetRegion" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.peerVnetRegion"></a>

```typescript
public readonly peerVnetRegion: string;
```

- *Type:* string

The region of the peer VNet in Azure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/azure_peering_connection#peer_vnet_region AzurePeeringConnection#peer_vnet_region}

---

##### `allowForwardedTraffic`<sup>Optional</sup> <a name="allowForwardedTraffic" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.allowForwardedTraffic"></a>

```typescript
public readonly allowForwardedTraffic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the forwarded traffic originating from the peered VNet is allowed in the HVN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/azure_peering_connection#allow_forwarded_traffic AzurePeeringConnection#allow_forwarded_traffic}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/azure_peering_connection#id AzurePeeringConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AzurePeeringConnectionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeouts">AzurePeeringConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/azure_peering_connection#timeouts AzurePeeringConnection#timeouts}

---

##### `useRemoteGateways`<sup>Optional</sup> <a name="useRemoteGateways" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.useRemoteGateways"></a>

```typescript
public readonly useRemoteGateways: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If the HVN should use the gateway of the peered VNet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/azure_peering_connection#use_remote_gateways AzurePeeringConnection#use_remote_gateways}

---

### AzurePeeringConnectionTimeouts <a name="AzurePeeringConnectionTimeouts" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeouts.Initializer"></a>

```typescript
import { azurePeeringConnection } from '@cdktf/provider-hcp'

const azurePeeringConnectionTimeouts: azurePeeringConnection.AzurePeeringConnectionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/azure_peering_connection#create AzurePeeringConnection#create}. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeouts.property.default">default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/azure_peering_connection#default AzurePeeringConnection#default}. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/azure_peering_connection#delete AzurePeeringConnection#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/azure_peering_connection#create AzurePeeringConnection#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeouts.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/azure_peering_connection#default AzurePeeringConnection#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/azure_peering_connection#delete AzurePeeringConnection#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### AzurePeeringConnectionTimeoutsOutputReference <a name="AzurePeeringConnectionTimeoutsOutputReference" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.Initializer"></a>

```typescript
import { azurePeeringConnection } from '@cdktf/provider-hcp'

new azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeouts">AzurePeeringConnectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AzurePeeringConnectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeouts">AzurePeeringConnectionTimeouts</a>

---



