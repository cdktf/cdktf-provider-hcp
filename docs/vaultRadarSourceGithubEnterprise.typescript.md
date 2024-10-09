# `vaultRadarSourceGithubEnterprise` Submodule <a name="`vaultRadarSourceGithubEnterprise` Submodule" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VaultRadarSourceGithubEnterprise <a name="VaultRadarSourceGithubEnterprise" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_radar_source_github_enterprise hcp_vault_radar_source_github_enterprise}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.Initializer"></a>

```typescript
import { vaultRadarSourceGithubEnterprise } from '@cdktf/provider-hcp'

new vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise(scope: Construct, id: string, config: VaultRadarSourceGithubEnterpriseConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig">VaultRadarSourceGithubEnterpriseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig">VaultRadarSourceGithubEnterpriseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.resetProjectId">resetProjectId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VaultRadarSourceGithubEnterprise resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.isConstruct"></a>

```typescript
import { vaultRadarSourceGithubEnterprise } from '@cdktf/provider-hcp'

vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.isTerraformElement"></a>

```typescript
import { vaultRadarSourceGithubEnterprise } from '@cdktf/provider-hcp'

vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.isTerraformResource"></a>

```typescript
import { vaultRadarSourceGithubEnterprise } from '@cdktf/provider-hcp'

vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.generateConfigForImport"></a>

```typescript
import { vaultRadarSourceGithubEnterprise } from '@cdktf/provider-hcp'

vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VaultRadarSourceGithubEnterprise resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VaultRadarSourceGithubEnterprise to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VaultRadarSourceGithubEnterprise that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_radar_source_github_enterprise#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VaultRadarSourceGithubEnterprise to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.githubOrganizationInput">githubOrganizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.tokenInput">tokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.githubOrganization">githubOrganization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.token">token</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `githubOrganizationInput`<sup>Optional</sup> <a name="githubOrganizationInput" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.githubOrganizationInput"></a>

```typescript
public readonly githubOrganizationInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `githubOrganization`<sup>Required</sup> <a name="githubOrganization" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.githubOrganization"></a>

```typescript
public readonly githubOrganization: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VaultRadarSourceGithubEnterpriseConfig <a name="VaultRadarSourceGithubEnterpriseConfig" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.Initializer"></a>

```typescript
import { vaultRadarSourceGithubEnterprise } from '@cdktf/provider-hcp'

const vaultRadarSourceGithubEnterpriseConfig: vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.domainName">domainName</a></code> | <code>string</code> | Fully qualified domain name of the server. (Example: myserver.acme.com). |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.githubOrganization">githubOrganization</a></code> | <code>string</code> | GitHub organization Vault Radar will monitor. Example: "octocat" for the org https://yourcodeserver.com/octocat. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.token">token</a></code> | <code>string</code> | GitHub personal access token. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.projectId">projectId</a></code> | <code>string</code> | The ID of the HCP project where Vault Radar is located. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

Fully qualified domain name of the server. (Example: myserver.acme.com).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_radar_source_github_enterprise#domain_name VaultRadarSourceGithubEnterprise#domain_name}

---

##### `githubOrganization`<sup>Required</sup> <a name="githubOrganization" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.githubOrganization"></a>

```typescript
public readonly githubOrganization: string;
```

- *Type:* string

GitHub organization Vault Radar will monitor. Example: "octocat" for the org https://yourcodeserver.com/octocat.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_radar_source_github_enterprise#github_organization VaultRadarSourceGithubEnterprise#github_organization}

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

GitHub personal access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_radar_source_github_enterprise#token VaultRadarSourceGithubEnterprise#token}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The ID of the HCP project where Vault Radar is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_radar_source_github_enterprise#project_id VaultRadarSourceGithubEnterprise#project_id}

---



