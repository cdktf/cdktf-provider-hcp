# `vaultRadarResourceIamPolicy` Submodule <a name="`vaultRadarResourceIamPolicy` Submodule" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VaultRadarResourceIamPolicy <a name="VaultRadarResourceIamPolicy" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/vault_radar_resource_iam_policy hcp_vault_radar_resource_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.Initializer"></a>

```typescript
import { vaultRadarResourceIamPolicy } from '@cdktf/provider-hcp'

new vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy(scope: Construct, id: string, config: VaultRadarResourceIamPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicyConfig">VaultRadarResourceIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicyConfig">VaultRadarResourceIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VaultRadarResourceIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.isConstruct"></a>

```typescript
import { vaultRadarResourceIamPolicy } from '@cdktf/provider-hcp'

vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.isTerraformElement"></a>

```typescript
import { vaultRadarResourceIamPolicy } from '@cdktf/provider-hcp'

vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.isTerraformResource"></a>

```typescript
import { vaultRadarResourceIamPolicy } from '@cdktf/provider-hcp'

vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.generateConfigForImport"></a>

```typescript
import { vaultRadarResourceIamPolicy } from '@cdktf/provider-hcp'

vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VaultRadarResourceIamPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VaultRadarResourceIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VaultRadarResourceIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/vault_radar_resource_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VaultRadarResourceIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.property.policyDataInput">policyDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.property.resourceNameInput">resourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.property.policyData">policyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.property.resourceName">resourceName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `policyDataInput`<sup>Optional</sup> <a name="policyDataInput" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.property.policyDataInput"></a>

```typescript
public readonly policyDataInput: string;
```

- *Type:* string

---

##### `resourceNameInput`<sup>Optional</sup> <a name="resourceNameInput" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.property.resourceNameInput"></a>

```typescript
public readonly resourceNameInput: string;
```

- *Type:* string

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.property.policyData"></a>

```typescript
public readonly policyData: string;
```

- *Type:* string

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VaultRadarResourceIamPolicyConfig <a name="VaultRadarResourceIamPolicyConfig" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicyConfig.Initializer"></a>

```typescript
import { vaultRadarResourceIamPolicy } from '@cdktf/provider-hcp'

const vaultRadarResourceIamPolicyConfig: vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicyConfig.property.policyData">policyData</a></code> | <code>string</code> | The policy to apply. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicyConfig.property.resourceName">resourceName</a></code> | <code>string</code> | The HCP resource name associated with the Radar resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicyConfig.property.policyData"></a>

```typescript
public readonly policyData: string;
```

- *Type:* string

The policy to apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/vault_radar_resource_iam_policy#policy_data VaultRadarResourceIamPolicy#policy_data}

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdktf/provider-hcp.vaultRadarResourceIamPolicy.VaultRadarResourceIamPolicyConfig.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

The HCP resource name associated with the Radar resource.

This is the name of the resource in the format `vault-radar/project/<project_id>/scan-target/<scan_target_id>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/vault_radar_resource_iam_policy#resource_name VaultRadarResourceIamPolicy#resource_name}

---



